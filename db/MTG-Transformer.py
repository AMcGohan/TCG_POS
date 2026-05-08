import json

def esc(s):
    if s is None:
        return ''
    return str(s).replace('\\', '\\\\').replace("'", "''")

def get_treatment(card):
    frame_effects = card.get('frameEffects', [])
    promo_types   = card.get('promoTypes', [])
    treatments    = frame_effects + promo_types

    if treatments:
        return ', '.join(treatments)
    return 'Standard'

def write_insert(out, name, img_url, setCode, number, treatment):
    out.write(
        f"INSERT INTO `card` (`card_name`, `card_img`, `game`, `set`, `cn`, `treatment`) "
        f"VALUES ('{esc(name)}', '{esc(img_url)}', 'MTG', '{esc(setCode)}', '{esc(number)}', '{esc(treatment)}');\n"
    )

def transform_mtgjson(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    written  = 0
    skipped  = 0

    with open(output_file, 'w', encoding='utf-8') as out:
        for setCode, set_data in data['data'].items():
            for card in set_data.get('cards', []):
                try:
                    name      = card.get('name', '')
                    number    = card.get('number', '')
                    finishes  = card.get('finishes', ['nonfoil'])
                    treatment = get_treatment(card)
                    img_url   = f'https://api.scryfall.com/cards/{setCode.lower()}/{number}?format=image'

                    # One row per finish (foil and nonfoil as separate inventory items)
                    for finish in finishes:
                        write_insert(out, name, img_url, setCode, number, treatment)
                        written += 1

                except Exception as e:
                    skipped += 1
                    continue

    print(f"Done! {written} rows written, {skipped} rows skipped to {output_file}")

transform_mtgjson('AllPrintings.json', '../../init/02-mtg.sql')