var PI = Math.PI;

var model_data = {"hvm_equivalents": {"alfa155": "MB27827", "LIONESS": "MB29302", "DTUG_L": "MB28041", "hedgehog": "hedgehog", "GORILLA": "MB28626", "_014": "MB29822", "bora_a": "MB27827", "_010": "MB29830", "_011": "MB27680", "clio": "MB27827", "blCow": "MB27925", "SISTER_L": "MB27840", "celica": "MB27827", "ELEPHANT_M": "lo_poly_animal_ELE_AF1", "watermelon_obj": "single_watermelon", "mig29": "MB29629", "cruiser": "MB27840", "Pear_obj": "single_pear", "face0002": "face0001", "_031": "MB29822", "support": "support_ship", "_033": "MB27667", "face0001": "face0001", "sopwith": "MB29050", "Apricot_obj": "Apricot_obj", "_01_Airliner_2jetEngines": "MB27463", "raspberry_obj": "raspberry_obj", "face0006": "face0001", "_37": "antique_furniture_item_37", "face0003": "face0001", "motoryacht": "motoryacht", "walnut_obj": "walnut_obj", "bmw325": "MB27827", "_44": "antique_furniture_item_44", "_10": "antique_furniture_item_10", "Peach_obj": "Peach_obj", "bear": "lo_poly_animal_BEAR_BLK", "_001": "MB29830", "TURTLE_L": "lo_poly_animal_TRTL_GRN", "_004": "MB28045", "_008": "MB29830", "astra": "MB27827", "z3": "MB31079", "BAHRAIN": "MB27239", "_19_flyingBoat": "MB28113", "Strawberry_obj": "Strawberry_obj", "breed_pug": "lo_poly_animal_DOBERMAN", "rdbarren": "MB27309", "_08": "antique_furniture_item_08", "Apple_Fruit_obj": "single_apple", "junkers88": "MB29050", "MQUEEN_L": "MB29654", "_38": "antique_furniture_item_38", "CGTG_L": "MB27840", "face0007": "face0001", "_12": "antique_furniture_item_12", "_11": "antique_furniture_item_11", "Beetle": "MB31409", "face0004": "face0001", "face0005": "face0001", "face0008": "face0001", "f16": "MB28243", "_05_future": "MB28029", "_18": "antique_furniture_item_37"},
                  "posdict": {"antique_furniture_item_08": {"y": 0, "x": PI/2, "z": 0}, "lo_poly_animal_DOBERMAN": {"y": 0, "x": PI/2, "z": PI/2}, "lo_poly_animal_ELE_AF1": {"y": 0, "x": PI/2, "z": PI/2}, "MB27309": {"y": PI/2, "x": 0, "z": 0}, "MB27463": {"y": 0, "x": 0, "z": 0}, "lo_poly_animal_TRTL_GRN": {"y": 0, "x": PI/2, "z": PI/2}, "MB29654": {"y":PI/2, "x": 0, "z": 0}, "MB28029": {"y": Math.PI/2, "x": 0, "z": 0}, "single_pear": {"y": -0.02, "x": -0.165, "z": -0.301}, "antique_furniture_item_38": {"y": 0, "x": PI/2, "z": 0}, "lo_poly_animal_BEAR_BLK": {"y": PI/2, "x": 0, "z": 0}, "antique_furniture_item_44": {"y": 0, "x": PI/2, "z": 0}, "antique_furniture_item_37": {"y": 0, "x": PI/2, "z": 0}, "MB28626": {"y": PI/2, "x": 0, "z": 0}, "MB27827": {"y": Math.PI/2, "x": 0, "z": 0}, "walnut_obj": {"y": 0.09, "x": PI/2, "z": -0.15}, "Strawberry_obj": {"y": 0, "x": PI/2, "z": 0}, "MB29050": {"y": 1.386, "x": -.629, "z": -.79}, "MB29629": {"y": PI/2, "x": 0, "z": 0}, "MB27239": {"y": 0, "x": 0, "z": 0}, "single_apple": {"y": 0, "x": PI/2, "z": 0}, "MB28113": {"y": PI, "x": 0, "z": 0}, "MB27667": {"y":PI/2, "x":0 , "z":0}, "antique_furniture_item_10": {"y": 0, "x": PI/2, "z": 0}, "MB29822": {"y": 0, "x": 0, "z": 0}, "MB31409": {"y": PI/2, "x": 0, "z": 0}, "MB29302": {"y": PI/2, "x": 0, "z": 0}, "MB27925": {"y": PI/2, "x": 0, "z": 0}, "MB28243": {"y": 0, "x": 0, "z": 0}, "Apricot_obj": {"y": 0, "x": PI/2, "z": 0.0}, "single_watermelon": {"y": 0, "x": PI/2, "z": 0}, "MB28045": {"y": 0, "x": 0, "z": 0}, "MB28041": {"y": PI/2, "x": 0, "z": 0}, "MB31079": {"y": 0, "x": 0, "z": 0}, "antique_furniture_item_12": {"y": 0, "x": PI/2, "z": 0}, "antique_furniture_item_11": {"y": 0, "x": PI/2, "z": 0}, "MB27840": {"y": 0, "x": 0, "z":0}, "motoryacht": {"y": PI/2, "x": 0, "z": 0}, "Peach_obj": {"y": 0, "x": PI/2, "z": 0}, "MB29830": {"y": 0, "x": 0, "z": 0}, "MB27680": {"y": -PI/2, "x": 0, "z": 0}, "support_ship": {"y": PI/2, "x": 0, "z": 0}, "raspberry_obj": {"y": Math.PI, "x": 0, "z":0}, "face0001": {"y": -Math.PI/2, "x": 0, "z": +Math.PI/24}, "hedgehog": {"y": PI/2, "x": 0, "z": 0}},
                  "sizes": {'Apple_Fruit_obj': 81,  'Apricot_obj': 85,  'BAHRAIN': 142,  'Beetle': 120,  'CGTG_L': 140,  'DTUG_L': 141,  'ELEPHANT_M': 95,  'GORILLA': 102,  'LIONESS': 93,  'MQUEEN_L': 141,  'Peach_obj': 84,  'Pear_obj': 82,  'SISTER_L': 142,  'Strawberry_obj': 79,  'TURTLE_L': 90,  '_001': 82,  '_004': 82,  '_008': 83,  '_010': 81,  '_011': 82,  '_014': 84,  '_01_Airliner_2jetEngines': 156,  '_031': 81,  '_033': 82,  '_05_future': 113,  '_08': 89,  '_10': 83,  '_11': 81,  '_12': 91,  '_18': 87,  '_19_flyingBoat': 159,  '_37': 85,  '_38': 77,  '_44': 81,  'alfa155': 122,  'astra': 122,  'bear': 96,  'blCow': 93,  'bmw325': 120,  'bora_a': 120,  'breed_pug': 95,  'celica': 121,  'clio': 122,  'cruiser': 140,  'f16': 150,  'face0001': 96,  'face0002': 96,  'face0003': 97,  'face0004': 97,  'face0005': 96,  'face0006': 96,  'face0007': 97,  'face0008': 95,  'hedgehog': 94,  'junkers88': 121,  'mig29': 153,  'motoryacht': 142,  'raspberry_obj': 81,  'rdbarren': 132,  'sopwith': 115,  'support': 141,  'walnut_obj': 81,  'watermelon_obj': 81,  'z3': 118},
                  };
