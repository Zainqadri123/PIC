
from flask_cors import CORS
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'
from flask import Flask,request,json
from tensorflow import keras
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
from keras.preprocessing.image import load_img
from keras.applications.inception_v3 import preprocess_input
from keras.preprocessing.image import img_to_array
import numpy as np
model = keras.models.load_model("pest_classifer.h5")
app=Flask(__name__)
CORS(app)
UPLOAD_FOLDER = './uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = { 'png', 'jpg', 'jpeg'}
# pymongo
import pymongo
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["PEST_Identification"] #database
subscribers = mydb["subscribers"]   #collection
rating = mydb["rating"]   #collection
userfeedback = mydb["userfeedback"]   #collection
# end

@app.route('/signup',methods=['post'])
def signup():
    try:
        # user = subscribers.find_one({'email':request.json["email"],'password':request.json["password"]})
        # if user:
        #     data ={
        #         'email':request.json["email"],
        #         'password':request.json["password"]
        #     }
        #     return json.dumps({"success":1,"message": "Account Create successfully!", "data": data}), 200, {"Content-Type":"application/json"}
        # else:
        data ={
                'name':request.json['name'],
                'email':request.json["email"],
                'password':request.json["password"]
            }
        print(data)
        # subscribers.insert_one(data)
        if subscribers.find_one({'email':request.json['email'],'password':request.json['password']}):
              return json.dumps({"success":1,'message':"Already Exist!",'data':1}),200,{"Content-Type":"application/json"}
        subscribers.insert_one(data)
        print('-------------------',data)
        return json.dumps({"success":1,"message": "Account Create successfully!", "data": request.json["email"]}), 200, {"Content-Type":"application/json"}
    except:
        return json.dumps({'success':0,"message":"not vaild"}),400, {"Content-Type":"application/json"}

@app.route('/login',methods=['post'])
def login():
    try:       
        data ={
            'email':request.json['email'],
            'password':request.json['password']
        }
        print(data)
        if subscribers.find_one({'email':request.json['email'],'password':request.json['password']}):
            user=subscribers.find_one({'email':request.json['email'],'password':request.json['password']})
            return json.dumps({"success":1,'message':"Login successfully!",'data':user['email']}),200,{"Content-Type":"application/json"}
        
        # return json.dumps({"success":1,"message": "Login successfully!"}), 200, {"Content-Type":"application/json"}
        return json.dumps({"success":1,"message": "failed! to login",'data':1}), 200, {"Content-Type":"application/json"}
    except:
        return json.dumps({'success':0,"message":"not vaild"}),400

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# 
mylist = [
  { "PEST_NAME": "rice leaf roller(چاول کی پتی کا رولر)", "SCIENTFIC_NAME": "Marasmia exigua",
  "PEST_ATTACK_DETAILS":"""Rice, maize, and wild grasses. Look for folded or rolled leaves, larvae and frass. Look for the bands across the wings of the adult. However, there are several rice leaf rollers and leaf folders [e.g., Cnaphalocricus medinalis and Marasmia patnalis] that are similar and expert examination is needed to separate the species.
  (چاول، مکئی اور جنگلی گھاس۔ فولڈ یا رولڈ پتے، لاروا اور فراس تلاش کریں۔ بالغ کے پروں کے پار بینڈوں کو تلاش کریں۔ تاہم، کئی رائس لیف رولر اور لیف فولڈرز ہیں [جیسے، Cnaphalocricus Medinalis اور Marasmia patnalis] جو ایک جیسے ہیں اور انواع کو الگ کرنے کے لیے ماہرانہ جانچ کی ضرورت ہے۔)
  """,
  "RECOMMENDED_PESTICIDES":"""hexaflumuron.
chlorpyrifos(10%), abamectin EC(10%),chlorpyrifos EC (10%), methomyl (20%), profenofos (50%), and water were applied on rice
 --------------------------------------------------
 hexaflumuron
chlorpyrifos (10%), abamectin EC (10%), chlorpyrifos EC (10%), methomyl 
(20%), profenofos (50%), اور پانی چاول پر لگایا گیا
 """},
    { "PEST_NAME": "Triple triple of rice leaf(چاول کی پتی کیٹرپلر)", "SCIENTFIC_NAME": "Cnaphalocrocis medinalis",
    "PEST_ATTACK_DETAILS":"""The adult rice leaf folder is a yellow-brown moth. Leaf folder caterpillars fold the rice leaves around themselves and attach to the leaf margins. Each female lays around 300 eggs at night, during a lifecycle of 3 to 10 days. Larvae are yellow and about 12 - 25 mm long. As they mature, they turn yellowish green with brown heads. Each larva can make two to four folded leaves. The pupa is about 9-12 mm long and is found inside the rolled leaf. Adults are yellowish brown in colour and usually emerge in the evening.
    (بالغ چاول کے پتوں کا فولڈر ایک پیلے بھورے کیڑے کا ہوتا ہے۔ لیف فولڈر کیٹرپلر چاول کے پتوں کو اپنے ارد گرد جوڑ دیتے ہیں اور پتوں کے حاشیے سے منسلک ہوتے ہیں۔ ہر مادہ رات کو 3 سے 10 دن کی زندگی کے دوران تقریباً 300 انڈے دیتی ہے۔ لاروا پیلے رنگ کے ہوتے ہیں اور تقریباً 12 - 25 ملی میٹر لمبے ہوتے ہیں۔ جیسے جیسے وہ پختہ ہو جاتے ہیں، وہ بھورے سروں کے ساتھ زرد سبز ہو جاتے ہیں۔ ہر لاروا دو سے چار تہہ شدہ پتے بنا سکتا ہے۔ پیوپا تقریباً 9-12 ملی میٹر لمبا ہوتا ہے اور لپٹے ہوئے پتے کے اندر پایا جاتا ہے۔ بالغوں کا رنگ زرد بھورا ہوتا ہے اور عموماً شام کو نکلتا ہے۔.)""",
    "RECOMMENDED_PESTICIDES":"""alpha-cypermethrin, Abamectin 2%, or Cartap hydrochloride.
    (alpha-cypermethrin، Abamectin 2%، یا Cartap hydrochloride)"""},

      { "PEST_NAME": "دھان کے تنے کی چوڑی", "SCIENTFIC_NAME": "Hydrellia sasakii",
      "PEST_ATTACK_DETAILS":"""he feeding damage of whorl maggots causes yellow spots, white or transparent patches, and pinholes.
The larva uses its hardened mouth hooks to rasp the tissues of unopened leaves or the growing points of the developing leaves. The damage becomes visible when the leaves grow old. Mature larva prefers to feed on the developing leaves of the new developing tillers at the base of the rice plant.
(وہ بھورے میگوٹس کو نقصان پہنچانے سے پیلے دھبے، سفید یا شفاف دھبے اور پن ہولز بنتے ہیں۔
لاروا نہ کھولے ہوئے پتوں کے بافتوں یا نشوونما پانے والے پتوں کے بڑھتے ہوئے مقامات کو پکڑنے کے لیے اپنے سخت منہ کے کانٹے کا استعمال کرتا ہے۔ پتے بوڑھے ہونے پر نقصان ظاہر ہوتا ہے۔ بالغ لاروا چاول کے پودے کی بنیاد پر نئے ترقی پذیر ٹیلرز کے بڑھتے ہوئے پتوں کو کھانا کھلانے کو ترجیح دیتا ہے۔)""",
"RECOMMENDED_PESTICIDES":"""Dilute Malathion CE 50 at a dose of 4 1/2 oz per gallon of water and applied by spraying to the soil, turf, or foliage.
(ملاتھیون سی ای 50 کو 4 1/2 اوز فی گیلن پانی کی مقدار میں پتلا کریں اور مٹی، ٹرف یا پودوں پر اسپرے کرکے لگائیں۔)"""},
        { "PEST_NAME":"Asiatic Rice Borer (ایشیاٹک چاول بورر)", "SCIENTFIC_NAME": "Chilo suppressalis",
        "PEST_ATTACK_DETAILS":"""Asiatic rice borer infestation under natural field conditions, and to examine the relationship between plant silica content and susceptibility to stem borer. Based on results from 3 different tests, the varieties could be classified into 3 groups: resistant, moderately resistant, and susceptible. Reactions to the Asiatic rice borer infestation were highly consistent, indicating that resistance was due to inherent varietal characters. A highly significant negative correlation was recorded between silica content of the stem and susceptibility to the rice borer. High silica content in the plant seemed to interfere with feeding and boring of the larvae and could cause defacing of their mandibles.
        (قدرتی میدان کے حالات کے تحت ایشیائی چاول کے بورر کی افزائش، اور پودوں کے سلکا کے مواد اور تنے کے بورر کے لیے حساسیت کے درمیان تعلق کی جانچ کرنا۔ 3 مختلف ٹیسٹوں کے نتائج کی بنیاد پر، اقسام کو 3 گروپوں میں درجہ بندی کیا جا سکتا ہے: مزاحم، معتدل مزاحم، اور حساس۔ ایشیائی چاول کے بورر کی افزائش پر ردعمل انتہائی مستقل تھے، جس سے ظاہر ہوتا ہے کہ مزاحمت موروثی مختلف قسم کے کرداروں کی وجہ سے تھی۔ تنے کے سلیکا مواد اور چاول کے بورر کے لیے حساسیت کے درمیان ایک انتہائی اہم منفی تعلق ریکارڈ کیا گیا تھا۔ پودے میں سیلیکا کی زیادہ مقدار لاروا کو کھانا کھلانے اور بور کرنے میں مداخلت کرتی ہے اور ان کی جبری کو خراب کرنے کا سبب بن سکتی ہے۔)
        """,
        "RECOMMENDED_PESTICIDES":"spray products containing chlorantraniliprole.(chlorantraniliprole پر مشتمل اسپرے مصنوعات)"},
          { "PEST_NAME":"yellow rice borer(پیلے چاول کا بورر)", "SCIENTFIC_NAME": "Scirpophaga incertulas",
          "PEST_ATTACK_DETAILS":"""Stem borers can destroy rice at any stage of the plant from seedling to maturity.
They feed upon tillers and causes deadhearts or drying of the central tiller, during vegetative stage; and causes whiteheads at reproductive stage.

(تنے کے چھلکے لگانے والے پودے کے کسی بھی مرحلے میں چاول کو بیج سے پختگی تک تباہ کر سکتے ہیں۔
وہ ٹیلرز کو کھاتے ہیں اور پودوں کے مرحلے کے دوران، مرکزی ٹِلر کے مردہ دل یا خشک ہونے کا سبب بنتے ہیں۔ اور تولیدی مرحلے پر سفید سروں کا سبب بنتا ہے۔)
""",
          "RECOMMENDED_PESTICIDES":"Apply nitrogen fertilizer(نائٹروجن کھاد ڈالیں۔)"},

            { "PEST_NAME": "rice gall midge(چاول کی پتی)", "SCIENTFIC_NAME": "Orseolia oryzae",
            "PEST_ATTACK_DETAILS":"Rice gall midge is a pest of paddy crop, causes a tubular gall at the base of tillers, causing elongation of leaf sheaths called onion leaf or silver shoot.(رائس گال مڈج دھان کی فصل کا ایک کیڑا ہے، جو ٹیلرز کی بنیاد پر نلی نما پتے کا سبب بنتا ہے، جس سے پتوں کی چادروں کی لمبائی ہوتی ہے جسے پیاز کی پتی یا سلور شوٹ کہتے ہیں۔)",
            "RECOMMENDED_PESTICIDES":"""l0% Neem leaf extract, 5% NSKE, 1% Neem oil, 0.3 % Fish oil resin soap, 3 % Dasagavya and 3 % Herbal plant extraction can be sprayed to bring down the pest population.
            (l0% نیم کے پتوں کا عرق، 5% NSKE، 1% نیم کا تیل، 0.3% مچھلی کا تیل رال صابن، 3% Dasagavya اور 3% جڑی بوٹیوں سے نکالنے والے پودوں کو کیڑوں کی آبادی کو کم کرنے کے لیے سپرے کیا جا سکتا ہے۔)"""},
              { "PEST_NAME": "Rice Stemfly(رائس اسٹیم فلائی)", "SCIENTFIC_NAME": "Atherigona oryzae","PEST_ATTACK_DETAILS":"""Leafhopper feeding causes leaves to appear stippled, pale, or brown, and shoots may curl and die. Some species cause a diamond-shape yellowing from the leaf tip. A few species secrete honeydew on which foliage-blackening sooty mold grows.(لیف شاپر کو کھانا کھلانے کی وجہ سے پتے پھٹے ہوئے، پیلے یا بھورے نظر آتے ہیں اور ٹہنیاں جھک کر مر سکتی ہیں۔ کچھ پرجاتیوں کی وجہ سے پتی کی نوک سے ہیرے کی شکل کا پیلا پڑ جاتا ہے۔ کچھ انواع شہد کا دیو خارج کرتی ہیں جس پر پتوں کو کالا کرنے والا کالا مولڈ اگتا ہے۔)""",
              "RECOMMENDED_PESTICIDES":"Nitrogen application can be split to reduce Brown plant hopper buildup.(براؤن پلانٹ ہوپر کی تعمیر کو کم کرنے کے لیے نائٹروجن کے استعمال کو تقسیم کیا جا سکتا ہے۔)"},
                { "PEST_NAME": "brown plant hopper(بھورا پلانٹ hopper)", "SCIENTFIC_NAME": "Nilaparvata lugens","PEST_ATTACK_DETAILS":"Leafhopper feeding causes leaves to appear stippled, pale, or brown, and shoots may curl and die. Some species cause a diamond-shape yellowing from the leaf tip. A few species secrete honeydew on which foliage-blackening sooty mold grows.(لیف شاپر کو کھانا کھلانے کی وجہ سے پتے پھٹے ہوئے، پیلے یا بھورے نظر آتے ہیں اور ٹہنیاں جھک کر مر سکتی ہیں۔ کچھ پرجاتیوں کی وجہ سے پتی کی نوک سے ہیرے کی شکل کا پیلا پڑ جاتا ہے۔ کچھ انواع شہد کا دھند نکالتی ہیں جس پر پتوں کو کالا کرنے والا کالا مولڈ اگتا ہے)",
                "RECOMMENDED_PESTICIDES":"Nitrogen application can be split to reduce Brown plant hopper buildup."},
                                { "PEST_NAME": "brown plant hopper(بھورا پلانٹ hopper)", "SCIENTFIC_NAME": "Nilaparvata lugens","PEST_ATTACK_DETAILS":"Leafhopper feeding causes leaves to appear stippled, pale, or brown, and shoots may curl and die. Some species cause a diamond-shape yellowing from the leaf tip. A few species secrete honeydew on which foliage-blackening sooty mold grows.(لیف شاپر کو کھانا کھلانے کی وجہ سے پتے پھٹے ہوئے، پیلے یا بھورے نظر آتے ہیں اور ٹہنیاں جھک کر مر سکتی ہیں۔ کچھ پرجاتیوں کی وجہ سے پتی کی نوک سے ہیرے کی شکل کا پیلا پڑ جاتا ہے۔ کچھ انواع شہد کا دھند نکالتی ہیں جس پر پتوں کو کالا کرنے والا کالا مولڈ اگتا ہے)",
                "RECOMMENDED_PESTICIDES":"Nitrogen application can be split to reduce Brown plant hopper buildup.(براؤن پلانٹ ہوپر کی تعمیر کو کم کرنے کے لیے نائٹروجن کے استعمال کو تقسیم کیا جا سکتا ہے۔)"},
                                     { "PEST_NAME": "brown plant hopper(بھورا پلانٹ hopper)", "SCIENTFIC_NAME": "Nilaparvata lugens","PEST_ATTACK_DETAILS":"Leafhopper feeding causes leaves to appear stippled, pale, or brown, and shoots may curl and die. Some species cause a diamond-shape yellowing from the leaf tip. A few species secrete honeydew on which foliage-blackening sooty mold grows.(لیف شاپر کو کھانا کھلانے کی وجہ سے پتے پھٹے ہوئے، پیلے یا بھورے نظر آتے ہیں اور ٹہنیاں جھک کر مر سکتی ہیں۔ کچھ پرجاتیوں کی وجہ سے پتی کی نوک سے ہیرے کی شکل کا پیلا پڑ جاتا ہے۔ کچھ انواع شہد کا دھند نکالتی ہیں جس پر پتوں کو کالا کرنے والا کالا مولڈ اگتا ہے)",
                "RECOMMENDED_PESTICIDES":"Nitrogen application can be split to reduce Brown plant hopper buildup.(براؤن پلانٹ ہوپر کی تعمیر کو کم کرنے کے لیے نائٹروجن کے استعمال کو تقسیم کیا جا سکتا ہے۔)"},
]
# 
labels=['white backed plant hopper ','rice gall midge','yellow rice borer','small brown plant hopper','rice leaf caterpillar','brown plant hopper','Rice Stemfly','asiatic rice borer','paddy stem maggot','rice leaf roller']
@app.route('/upload/file', methods=['POST'])
def upload_file():
    try:
         if 'file' not in request.files:
            return json.dumps()
         file = request.files['file']
         if file.filename == '':
            return json.dumps()
         if file and allowed_file(file.filename):
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], 'image.jpg'))
            image = load_img(app.config['UPLOAD_FOLDER']+'/'+'image.jpg', target_size=(299, 299))
            
            image = img_to_array(image)
            image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
            
            image = preprocess_input(image)
            yhat=model.predict(image)
            output=mylist[np.argmax(yhat)]
            print(output)
            return json.dumps({'success':1,'message':"Data found!",'data':output }),200, {"Content-Type":"application/json"}
         else:
            return json.dumps({'success':1,'message':"Error!","data":1}),200, {"Content-Type":"application/json"} 
    except:
        return json.dumps({'success':0,'message':"Error during image uploading"}),400, {"Content-Type":"application/json"}


@app.route("/feedback",methods=['POST'])
def feedback():
    try:
      print("payload",request.json)
      data = {
        'email':request.json['email'],
        'name':request.json['name'],
        'feedback':request.json['feedback']
      }
      print("0=------------------",data)
      userfeedback.insert_one(data)
      return json.dumps({'success':1,'message':'feedback submitted!'}),200,{"Content-Type":"application/json"}
    except:
      return json.dumps({'success':0,'message':'System error'}),400,{"Content-Type":"application/json"}



@app.route("/rating",methods=['POST'])
def func():
    try:
      print("payload",request.json)
      data = {
        'email':request.json['email'],
        'value':request.json['value'],
        'pest_class':request.json['pest_class'],
        'feedback':request.json['feedback']
      }
      print("0=------------------",data)
      rating.insert_one(data)
      return json.dumps({'success':1,'message':'yes rating come'}),200,{"Content-Type":"application/json"}
    except:
      return json.dumps({'success':0,'message':'no rating come'}),400,{"Content-Type":"application/json"}



if __name__=="__main__":
    app.run(debug=True)