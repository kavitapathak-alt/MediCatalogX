"use client";

import { useState, useEffect } from "react";
import { Pill, Filter, Search, Shield, Thermometer, ChevronDown, Phone, Star, Truck, X, ShoppingCart, AlertCircle, CheckCircle } from "lucide-react";

const generalMedicines = [
  {
    id: 1,
    name: "Frusemeg-Plus Tablets",
    type: "Analgesic & Antipyretic",
    storage: "Room Temperature",
    price: 25,
    prescription: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/407801097/RC/YV/RU/13501949/furosemide-20mg-spironolactone-50mg-tablets-1000x1000.jpeg",
    description: "Paracetamol (Acetaminophen) is a common analgesic and antipyretic used to treat mild to moderate pain and fever. It works by inhibiting prostaglandin synthesis in the brain.",
    rating: 4.2,
    brand: "Cipla",
    dosage: "500 mg",
    quantity: "10 tablets",
    discount: 30,
    isHot: true,
    stock: "In Stock",
    delivery: "2 hours",
    category: "fever"
  },
  {
    id: 2,
    name: "Spironot-F",
    type: "Antibiotic",
    storage: "Room Temperature",
    price: 120,
    prescription: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/1/AV/FS/MP/13166357/frusemde-ip-20mg-spironolactone-ip-50mg--1000x1000.jpg",
    description: "Amoxicillin is a penicillin-type antibiotic that fights bacteria. It is used to treat many different types of infection caused by bacteria.",
    rating: 4.0,
    brand: "GSK",
    dosage: "250 mg",
    quantity: "10 capsules",
    discount: 15,
    isNew: true,
    stock: "In Stock",
    delivery: "4 hours",
    category: "antibiotics"
  },
  {
    id: 3,
    name: "Evrysdi 60mg",
    type: "Antihistamine",
    storage: "Room Temperature",
    price: 45,
    prescription: false,
    image: "https://alleviareindia.com/wp-content/uploads/elementor/thumbs/evrysdi-qd79yu1mhqvj81z21wpnct3yk5svfcpw6zxtue1y14.webp",
    description: "Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching.",
    rating: 4.5,
    brand: "Dr. Reddy's",
    dosage: "10 mg",
    quantity: "10 tablets",
    discount: 10,
    stock: "In Stock",
    delivery: "Same day",
    category: "allergy"
  },
  {
    id: 4,
    name: "Iressa 250mg",
    type: "Proton Pump Inhibitor",
    storage: "Room Temperature",
    price: 85,
    prescription: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/10/551583915/XE/BP/CX/201394365/iressa-gefitinib-tablet-250-mgjpg-1000x1000.jpeg",
    description: "Omeprazole is a proton pump inhibitor that decreases the amount of acid produced in the stomach. Used to treat GERD and other acid-related conditions.",
    rating: 4.3,
    brand: "Sun Pharma",
    dosage: "20 mg",
    quantity: "10 capsules",
    discount: 25,
    isSale: true,
    stock: "In Stock",
    delivery: "6 hours",
    category: "digestive"
  },
  {
    id: 5,
    name: "Zytiga 500mg",
    type: "Anti-diabetic",
    storage: "Room Temperature",
    price: 65,
    prescription: true,
    image: "https://media.sciencephoto.com/image/c0420032/800wm/C0420032-Abiraterone_acetate_cancer_drug.jpg",
    description: "Metformin is used with a proper diet and exercise program to control high blood sugar in patients with type 2 diabetes.",
    rating: 4.4,
    brand: "USV",
    dosage: "500 mg",
    quantity: "10 tablets",
    discount: 20,
    stock: "In Stock",
    delivery: "24 hours",
    category: "diabetes"
  },
  {
    id: 6,
    name: "Tagrisso 80mg",
    type: "Cholesterol Lowering",
    storage: "Room Temperature",
    price: 95,
    prescription: true,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438070405/II/LV/QT/86228023/tagrisso-osimertinib-80-mg-tablets-1000x1000.jpg",
    description: "Atorvastatin is a statin medication used to prevent cardiovascular disease in those at high risk and to treat abnormal lipid levels.",
    rating: 4.6,
    brand: "Pfizer",
    dosage: "10 mg",
    quantity: "10 tablets",
    discount: 18,
    isHot: true,
    stock: "Limited Stock",
    delivery: "12 hours",
    category: "heart"
  },
  {
    id: 7,
    name: "Lorbrena",
    type: "Vitamin Supplement",
    storage: "Cool & Dry Place",
    price: 40,
    prescription: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByTQ59EcvFFziNtmQAl_Xn3xaXBORhrI_uiCk5WMsBVilkBsZb5rENbQ&s",
    description: "Vitamin C is a water-soluble vitamin that is essential for normal growth and development. Required for the growth and repair of tissues.",
    rating: 4.7,
    brand: "Himalaya",
    dosage: "500 mg",
    quantity: "10 tablets",
    stock: "In Stock",
    delivery: "Same day",
    category: "vitamins"
  },
  {
    id: 8,
    name: "Zerodol SP 50mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://apollosage.in/assets/upload/blog/zerodol-sp-tablet_1758880022.webp",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 9,
    name: "Lynparza 100mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "data:image/jpeg;base64,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",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
   {
    id: 10,
    name: "Verzenio",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2DXKPF4HDNDNNFIPSUAIG4X2TBN%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.dcAZdX1aWlQ5ooKvsTFTjGGKhCXQr55FJRx0GHmEe7ignUvE-aZ6AYv-H91Lo_GDsaE8Wrc78rW44KfxLvE5OgCnttyM4dUklSz6d-ZdCpVlFLCClXnL17uevD1oc9xrJHhH7TJ6D2ZJTQ26N7xkW7ggTB8g_MdCyKa3W7b3TzAFZaWAc9Uiz_rbF7uciWYxhnfYa3fNKj66c_Dpva9Q3GsLSdNJYVW-d_2MCDKmLeuqvdcb1z7rI6KEjrMyc7b4JwgZ38leey40MR3GpQzlJ-nTyqkiq47Hp-NFBdJ9xMgkWY7I-SFjsOhgQE5zs9BOIre3FaUjwjoe0v_tEDJM2ZPgM1BcbM3nrJqAkx-Tt6C5q0FAW8nzU9GSnB-RGBgeIA5iCl2U03c4pU2TvSOZmqoOrdxD8sj7EARQhyPxp3YK4zf1PrqbYT7DM0rIqlZ5os6hoG-6PTQtWtm3J7cDYOKGhmhcGcQ1H8Iu9P6Uqyc.n2LECmqsOlWqzQb3IfFDvfjac81V704kheexBLBiiAY%26version%3DPublished&cb=63899741266&encodeFailures=1&width=592&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  }, {
    id: 11,
    name: "Tolvat 30mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://cdn01.pharmeasy.in/dam/productsnowatermark/268099/tolvat-30mg-strip-of-4-tablets-box-front-1-1756903588-non-watermarked.jpg?dim=320x320&dpr=1&q=100",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
   {
    id: 12,
    name: "Padcev E.V.",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2EYJ2WBC63CFRE2DZSZD3ILKPVN%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.7JTTZ_kVIIQFHIckIeG7YRuDc2l3D4uboAi8i0MQXolESdA44rexyNS6m-9flm0ILayrI9PEbf3uFuXhS8gXDlKkW1d8fRfguYT6EFUZIYnX4FzJHm7nZJFkyn7CplGH5qyZIhmfFnyG6iDmKTNitFpsnjrEU2wD1M-AXoIAawaA09MiN0pjnymzcHDERj31dhkgW5nHbnfKb598-608I7Vtf3ynNEJkJw9akrpJFnqH4BG7PVtXckNyqVNlRuRxl9hJUAe1HhZgbpc9mj1HPAZ2LfQLOCs3Nu5haiCEPDNRwZZaeQQ_rcofoF50-tshZEwk4iijEMiAFX8EIfS7XaBrNEK9rRqThYl2rtlMSHTsMdiPv5eFWJU6PdRvJ7add1oVaqjEG18-3qAbwT7kxaPcn0n_ngHndy3XKnHQuyqxgbHin6iGILVyx8c0SJ0CB9NopPEAr6sSmO4tIDZKl6fczb7L2sar6Vp7MTgmics.L1hTOeJHzVE92JjpFp8UQEfyeo9uPal2ej1zA2A9pDI%26version%3DPublished&cb=63899741269&encodeFailures=1&width=828&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
   {
    id: 13,
    name: "Jakavi 15mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2CBGEC2J5LUX5AZ5IM3XEIEGBEX%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.w-dW-RpZY8BX-79yb1ILLTslJCwrt7-NyIRRlrfRM5UYCKfDK84gUeKBfiZG0PW-ZipWEdKLPvRI9afYbnI8p9mGkAeWHdcRReofY5oi64SgZO3rKpDdj_p6ghI7VRs9_YYhTLFD9gP6igTaSf68P3zj5P_8W2PYhTchsDVlO5tRbfD3WGZAJtTcBGDrxyDJKUxYttvqPAKVW8w7hHOkE1D6sg-8CgHm9wuM22dURdeBSKWrHibaLmAFTlQ2KYlbiQ3M1ySYq8KB96e1PChW7FAprx7MbUuWQ0WjNd1OLc_ScY1Y3NhloYRMlpolcKzF-bWvvv0JYRzBrlRSt2N0BmZRdJQ0BUfGguuxRkMNpTot4UL6sHZkbZTqPCNYM18geis2wGVxPo_1UsVoOqtEOvSC_GWh5JftAo4mkjQ3SDC2ptn5Jag8Z6ttYzHYs-34kVfGmZRvfS-1iAMDYooMAJPBGQ8MWeMwdiwZ6cGMTeI.oh7Y_3QvyXGvuNWkLCYAkHDdxtx613IaVRzTcjy_Y6c%26version%3DPublished&cb=63899741269&encodeFailures=1&width=825&height=720",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 14,
    name: "Xeloda 500mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2A5IV3D66QUUFALLY26B5TH2PBN%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.Hhgi1P-tClY1Q7_mFDSIL3IsbCSSDgTVSna4O7UszuGqtYHW4CTkyygEwz0FQ5y7Us0cfsC87XKemOid6lGzP_xX9iewSdwS4P_5BPZnB7JhN1-I5-HFSiOkrJbDa5umJcwZSXj3rz1V1PYkUcncI7iGW2PcSaPMzwqrzDC3tafHM1hkYWz03kU90B7t27XbbVsqCps94JSpAL1AqdrVeMIo0af9DzfNxt91L-jZgYvoSUI_nBebpwAfecbL_Uf1f3TvEEN--xSQ3gpgP2O4u8teduwPLxXEG6WvQz0dK8ze3KdOcf-XYjVwL38zdGAifZ6GnWYb0whs8A7iRrJLda0JNIL9l5lCHO2jRJ05hVfiDsvVgZtmO8IeLsts8DFLk08ffHkq2XxC_t_FmVsC1_3ntzNWxj76ogJO0cGhBNWQ-Wo8xGo6a9vuBodt2923WQPibTo9Fg6L6jUKxH5564pDHyxEpjt0jahjr0naUSA.n4AHncc35Zq4_-TzEqo-7EPEGLirUjYY9SQc35CowjQ%26version%3DPublished&cb=63899741269&encodeFailures=1&width=592&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 15,
    name: "Inlyta 1mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2E5GWZ5E6Y5RBFJBHKKHLXHFNYB%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.08DV6WHSB3P_rkoSjLMcO33J91Oe4IkFuqNZVuwzq-quahnqtgQsRoG_w5k1wJSgiWwAWo2w-xn5_MKaXnqeGjJsx9ZGIG23BkuxCMKMiWVqyoyLerxtmbUylPBnb9rUkJ43gkhLWNY2-qSXABvSFnNcOJ4QUJxP0Zo3Mc-tg5UGeiCvBQM7bG0y_g-NfDVjgCs8-dg3etPW1Z4ou4UmSFyYSFbtqDojxE758gktA5xdadyXSKqYqQtrU6kBeYllEEp4NfT5ueca78d3SuWlRydvw_HcGTmfb87IwN3tlAbn1kIMvKmdGsEjqxFw5fTBU0wvRBBemBcgVCxOWrZQWMj_dw4NC3IdUfIRxHqz36gaoGl0uOz_Uqxo1sLcqeIrhl3RX88HLljmLA6Ma9gGE8TA45rkgwss763-UYyWyPm5pwv7oXohQSU1FCl2GYHwCNNjADa_s5Z4eJJs3_bjTNkSDR-KIcox7jP2_0HBoyM.kTlYck7GMX3422VakR9H-FlCTFodssH4xtGwkDZ3Gf4%26version%3DPublished&cb=63899741268&encodeFailures=1&width=592&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 16,
    name: "Padcev E.V.",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2GHHMMOWUCS7VEJJEOGNZKLAPJD%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.R1hhkJaJZ2zeuS3pCQ_SgFALqX3EDflH-d6qW88gqHC2O1QRk304d-dvjbZB0YNaEkpZXIK4lwssw1yc7tsAoJLDtt4ndnRTX4Zj8kn-v8xBTzlfb13NClPrMugPoBmwOFTVdveAYMQdwaMwlyEOY1ZnBerCQcMVz6k0DE5lqxMZNyzzLn45B0HXtspc1MZELF6EDGecSm2cw0Z4gnovREJnuoVCFD6AvQO7hkFkcxe3fM2Qm89v9tz3BHBJ6nJ6kZTWzgmM_qDbN_ZI5ChKAJh_4Jz3kM--gBB7UOLBZbG73HoQdbevD_4FmGAaqXNY30I0LPSYRVFb9Vge65-qpXhYdp2PMqFzsoioYOkV0uhZzvCkO9tzT_xx-dgwjwZtxCKLuoPoMSCw5t9oo52snkAKdJIiHXuoTty_sYoOoK-QDtT0VOH4-9EfSGgxWlG8omvd3eVSfJp4Ps_69g4k6LhUiQwEFk2NmwzuV40kT0k.m0iwL9xGdvNMWz5yWATaHtTwk1fV9ajQvBjvQuT0VGk%26version%3DPublished&cb=63899741268&encodeFailures=1&width=585&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 17,
    name: "Votrient 400mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2GQLHDGRWLLZRBY6NCW3FQZIMC6%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.mztfwsda6bD0n_vzkJF_Hk6SIndMrSu-cK8cIPi36vv819RRRIOb5CBrY9qEth021GhrUEVxeJustU0zORs34hBWFgqt3AN7wWkEIteNaM4T-Cx62JhjpCKtNx6KT7IQo7YgGEZGVD45O2eg0RjPObviyGBcXa4jvYIFwp05dbqBsPe2ZAjGGUxsQ8StWYnpXJgx6sOG4CGhTh-S47CIb9waN8LjOoy5e6mWiE-_SiY7zfRTc-C97PXh84ccso7qInM-wnd_1auyBD_OYJ6Aq9oSsrCCpZUezpNXiumknbJ91XsEekkpjJdrbullsha61xlkjNWl1yqBgfaxy8suiqP_F9WUGmKL1fB-6XoxOzA_RFTQbsnvsMQ4wNTxyWkgTya8OAcAI5Xztx0zZwHyQF-a6wCkq5c0YhOu9npQRia08zZYJ8K-9wWXFVH4dN22n9yw2ny0AfxNg4QTBunGzutyoT_4OCbPStGLEyFOtSM.eH4WB1ZdVyUAl0tpuo5BbxMzErSDiwKIqJivEY4Zau0%26version%3DPublished&cb=63899741268&encodeFailures=1&width=750&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 18,
    name: "carboplatin 450mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2GPP52FSB7HFBA3VAAJ66GW736I%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.NfCtUWoX44Bwx08wrVTg7S44cdiNu1ZeNeMYF4Twt0sf3VBeH6gRa3ce7EQKFBXcVXkUq61wCBa3HsvYZyUiqlBA8MhdwdgiQsS4ioCF8XMcS3U2k_QhpQ1DpC4tN6lDvzjWA2clyAlg8OI-WtGQw9n4i7TOZtZpdaE-SamzephpB59nPr-RBvM3D4G7io1aYjnUdmGvpoZ1RAs399VEq2qrt2FcyLZ5HMjqKGwRJ4w8okNFmCajw2Qq-SZNgpQrnzGjqdQut3bo596EcllTTH4U-mieh-CvFVV1UNatc-Q3KWLy7cPZPlSKKBKLc5mYYESUtohIwm3ghlW7KkTZEFmfTQGh8-nS2XZ-vbjqSHes_6TNEYrm9Q_VDIzdbtNtA-rMir5Ywp9vVIDFT5Upy-uIbBEBX3AwpH2sDVHEHM8Dc_HFbYuvnnZu0gxEvBpTp7xoNdpxCvJ0L2XCX5Nx1RPJWZhSxlK0nuvIjsS1PvU.luKj8CjzqIJrG8F4EQL2Gw27YgxWUl8ESNrlrbLzSks%26version%3DPublished&cb=63899741268&encodeFailures=1&width=444&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 19,
    name: "Vesanoid 10mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2BVG35DFVT3TNBLUJGRTMAIGLOM%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.VrlZHrZHh4vKIQPv56hmdC2w1128NiL_b_TKnvu6wVwUkHtnLSp5J6v05X1qRnZRhlMZziIS6xhr3ksna_Zwg_3cxpKFO14V_sIDDMt4VssPeH_AKAQc0QXgVYWTgWV13_S_XyJJJjyfdwB0a24XFHRjg1hQ3XDaTgL3M1pEf1_BpG4eFEWYiuLMSMtgK9sOkOR94-YuYnt7qVeWAWQrJPFdNUGdlB3IZ0lOseI3QzgekPgMuSAtkGnl1YJqNSG4iw9pf4MQjHCtw4ywiDlD8nzAy0ix_BXoPDyGQQJ8WU_vz_hESqYsRSajynAVTwiNyNzQYOoKq8rUtYV3HBiezgLDgYQtCuhykL8vPRkRZhxUg9opZpY2epWliwOomPcuW3UDaGQHNBRt0oYBkIwLfj5oX6KjPpLNZvUfGOdtKWBNmAVjnK45e176LBXy3Sab8CvM-YiV2FlzedjXzrCDnuChbpp_v-1VMrzlHSnCaD4.HwqdfZ1LuIU9kpX4_jqcA4oYeOl82fG0gq2mQjo76TY%26version%3DPublished&cb=63899741268&encodeFailures=1&width=1171&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 20,
    name: "MabThera 100mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2C6CZYXLLILUBC34SUGKYL4FQBP%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.xIuFsKl0sD3zIFJoxmgfRlTNM70os69EqFnAV_Dre_CIDx8930C7qm0hR6CjwjkNIvJ_INABx7kR09o-pgc7fCRJ6ahF1J01u8uNIiG_kmnS0HUGeGopEKKMuroCfBjMjdAozFSyghBq1jChQc4V8HcoRRca8JpadshYP6wJSGsVF8q2vmgcJWL3Y-awuZlc3HM75-kyB8XhgyhEydFFW6oF4uDV93SNMqEs5bNbM3EGp4GFLozbJR4hGd2pWQMjuNV6bxtfZq9nn_wJbupu2SD7mSK8mF5T4VXobn2u3JKlpp6rxmYghtPhq4_wwyiHwufH0Af3TLPfX3rrLFka5DpJTOKIW3n-i8T-cNNvIC-NBHESM8VRznVq6CLaIV9nhOVZseQYGByj0u2MkMSjnqC7SGjiZF3zDd5hSA0afT15TvRpaH-vrCpw7hffNaFHcUXMtv-Iyyoct40dFOvUuKzzrV_Sm40Q-MXgSM7WPaI.EDp-6fr6iN7bFCdP5orcfk_v5So5NG5rZsa_5ZFudR0%26version%3DPublished&cb=63899741268&encodeFailures=1&width=1403&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 21,
    name: "Xeljanz XR 5mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2DBI77XLB7NUNE2EVZP3PMLCPUD%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.doQao9M2y_IypCLwmm473wISfOM4LbOXCNqrgnV0TobArflJYu-tO2vRFAksDDYe760jaTLjxx8suBX7jI4At2JX8vDl2SDxM3-nKlLbnkTkHgUmDV7F_tbsO2MRwFSa5aCKVsnlklRBxywAjHItkONbrGX0kC07Aa2SC1f0NQwR_dMAv8hZoLXtpt9Sa1N57_NilYcauqMqVQ_ZhxgKA_Rox0Ye14vFw7isYKuv3u5GP56kjGghPs5dBpH2JKn_4J4vCMEZPUwgV_uyiMNB0d-8Bz41iSYUu5BPi69dqqevBJ__DpjFoauDFHof1gDB-BpgCib8_g1_frLn9p-H4r7hirnGUWer6_iCHtPTvxoROmd2fdJBkKsYigu7ZAR3FvNKmpQl1yVUL_SdSXvuFoiobulo_2ZxkdbcRnc3YUYHkBxyY6csvT1OUnDZZgfaORIaFEbDBfNCXedooMm-xJOB1zIG65j6_m8qi5UhRKU.vVQwUC6A474Q4A-8LwtYVwpCkX-YsIii7aIXp8Hq1to%26version%3DPublished&cb=63899741268&encodeFailures=1&width=535&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },{
    id: 22,
    name: "Lonsurf ",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2A6MGMCAILZXBB2YYBYZEGNZHI2%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.RPc1PfYusa1jWhv89dC_O2nYx6rCdA8Bp54Qc7m6XY7miXqeJJOMMgCNGN9y62IrIjoXf_6T-hU5AMRBU4mn_CFkAcfgzvqp4z5DrQCHLVNWbqR2PfkZ5ou679Sk1CDtl-TAIfz5UdEx-6wtIPQvCxR3StbVo0VQdHht9V3g46QhmPpX_U0MhFrxDCVWLQzjkat1UZP8KCl_mifWp4H1C-C4in_bzWJdYA778u8etK334NPqnX6qXuG1ySQnCSTvU3fzTEOXkKWPGhpzg10P_Vd3ZTKKgrbAQfi2xyEJS2flfLJ0VS__fkIIEgOi5BIVsaYWUr7sfLm_rZioA9r0WAHlrw5nCrLdv6mBGfbkHnGpdT50ulOxrVshfE4gO5Gdi8zOFpvPbJR0oamOtmCQ8O3KEoa4yVtdsQFQEUPceAW5TP3wHzPnqTuYQDAFecbbDwLfznLa0DMbWpDh2xigfYkxvTzLYIJ-I6JPiU9CONs.RXDcNyMRuY8KSPUlTipuM5m5ugAaCdIV6LJS-E-_f9A%26version%3DPublished&cb=63899741267&encodeFailures=1&width=594&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },{
    id: 23,
    name: "Piqray 150mg+150mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2HQE5M63P3WV5G22KXJJXLQIFMB%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.-mcsxzvM0djmYbXrEpLPysCbGnU69UdGRNGIyByFZI6HUcDmmRimDh2eiPhSf6dElyfnhtRzDg-O81jGl4Ky3RaSuyeeqmNLxCIQzelrXoT4e-D5Zu4EXPvUj2XBqTJqDWBHILbtreWZnOz7qhRd23hhQNJZWgkig8THA7sy9_REvuLkdzDXWCz7mvPnP7Vg4WDhv9S5GhSlIEe1XZ26QAAz_dIOhYyG_gihKwt_CU1NsBo739S7Ghb9TtKEQHNlX9KkoTslYOYjAfJyd3NbKxQJfiXd_kKtuNAEQ0nBfMybaMIypvyTBEl7X1ioCuC5UvrcjK8Spm5oo4hkdL8oOrNkvO9SNGoRv1IHz_8atv05ZQK-VvlQG3OIbkE0W_cQl_RPw0VSczE_NmIjj1fzpsHx22CXggy1EwKSdoBqZV2jPGC1tg-9K4csqqNF52be4nPZJ337tDxEj046qTX68Awf_kEtbKkyBvkNT-t3G10.s1-6fWJyWC-_oL9KDs6zfkPIsnOuuOx8Y5qL-N7O49Q%26version%3DPublished&cb=63899741267&encodeFailures=1&width=1065&height=762",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 24,
    name: "Tygacil 50mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2HG5KRM3IQZ4FCI37A377MWQG72%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.uvCu8se0d0snjmBQz2X0s0_UGFWd-nIDlNUMV0s7tI45q84Bv1rQzXmd3v7mBBKdMcKU0hl-XIUYcvfM94EOZezX-TgImHieOqTquknDvf8UQLN7QtKw49deanwdjFIOm1_vnpxBJs41BeKChuIB4jjT7FGBGahu8FTslV3j4MxCL5saGrMbTGCALgc5Mu7FJ8UWaYYSHQYepqgjcNqLLew_c3VrjozE5Y8up3UldiqIWHog0YSkwAXm-oKu_0lPIMp06xpRGHzq-BrOVyToPOGe4SwqeChVjuqBDPZ7HhUJOUBBnOuIwG6FBmHFYwWV1dnP73tYR30tKqLJEmg6emcZ6jVzSV-5Lj_elexa8lJkebWK6ZIX5LhQlrMdNPHcoTB5b9U0ohA0MfsxmmdxznPT-JQeIEAy09z6viFSmyFgK6oMTkHrXAJCGyHkxzGY6GHq-UBoyBvAIFkkl6OMyC1CwflIZAY-wCAejsGUTSM.WNK-bqMNitCyY37GJT1YFN3GayuIOv2YkNJz0KS6uwY%26version%3DPublished&cb=63899741267&encodeFailures=1&width=1052&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 25,
    name: "Abinutuzumab 100mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2GWNNRY6CSHDJE3SNMLFUOD2EO5%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.P2D_rXJfscp1ElCpxN8FST4b7ggzbwZStZvFy08H29wqKbFMBmED8I5VLAK6FkeIdbmUxxF7Z6rmH4HbppdUWdS0thiRGQZtG2SFo9rcxaQFYhDFd4ClzqLRO92grrcKzK0283hNOgaWvKs1-yEbEUf7D9rMveGimZb2gwz5ZfqSPrjgDA9nzM_BEPED19_uhRGgI6FaEYNhObGq2HpgHm3AsrQjCuztiG7pfYEyiKWq1Q5W10g09MYtDuinFL1ev3bV2W5UTL6afkkX-YWOwD4utvym565jITiyOwiHIrqJVRokuphH_nrKINWDE60voG8-z1A_q5KVqkH76BI7qJZ9glJQh1Oo9iLeuhudz5CVcpJetkVFvwhGk2TQ10c5jlu-_fIsj6dWup3oMr3-AyVkDSQ7hjLVZs6Y5i6QFHii-EXlZg1MHs4M3TXnQLnz0eyvemOy1ldW6dcMfNUxO3xmKJBW1MEWcu-1UYMD2z8.cN0YZ9AvXeyr4o8COksJkt5IEJJHzRAu4Orrb5tOK48%26version%3DPublished&cb=63899741267&encodeFailures=1&width=592&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 26,
    name: "Adcetris 50mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2CNZHC27CPUSNFLDWNHCMLVS2V7%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.UT9gpEPCKEZqsWs2Ab_UQTLyfyW1fEjYRfntJETnvM9cNsGRKfARSx2DcRLd-b8ER_7fUJMa5ay8RDBf3tSkd1GS4Ls2Iuiy-_lLxstSxARdGSB9WN4rqw3I2tQQ50elCaY5L-33F1qd-b2ihbwg8vNHSzaBCq3Xe1_7eI0rkVjMSwXwUEdPIDziUwXSa-KtYC5TOPRUWzFEj1AMuDLnip_JG6kRDaR64Pq2adqTpPgaW7Wv_0LgM5s7ZUPdWCphTGZ-r4PvhS0lFINB6QABQdvS6QcVa0pGooIkIODGLUjftdrmC7nUnWu_r68PqfMUJL-9eIIhHpdlrisehhdoyT6pSxjy1rxq9K88YjXz4yDlJJ4IUbN8w1lLb8w1XBaa08VkGT4RRILStIcmm6zqu0LSLj8XgeDkeTuyyZf0tPNLd0Op3L9af_w4njxqrqKfGJFzO43bCR_aILfOyEFdZNpbfh9NLR1jngnMkoB-tms.9B9MsdeUXIRbkjfTHxoSCsl4gkBGU9eSjV-febqUcG0%26version%3DPublished&cb=63899741267&encodeFailures=1&width=733&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 27,
    name: "Evrysdi 35mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2HEZEP7RZO6DFBYEGW74TGVAVKH%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.QzsqnQcXxPRpcXUIbYOcbrDKfiljrheM0PvGjcQxxq-z-AtxD8f0a-C-z74220XiacTL3Duq8G8jPa0LJZJpS-x6JCVOmGLZJaAtw4q36p-8JmeokZt9xu9tHBNzjyfH1eYF6x5Y5Lamtz04vfrXaDNy5CwumuTxvaCQI8-3witHo_pmiLXU47Nkn1nfd-3mGzLdta-UKgtKaU9cNEwUTmWEmmqhdondAv-o11HYYR3lH-6gbYHComK_33y0svtCx2j1NlGlHGoWhTCO_c5vaHSjuA-yChM_ejUHMJmdaLRO7rC0JUORGwF7TyPGuo03UZlpkMxN_k2zO8OJLRBPi2TNeFp-uc95zxGLfsZWWPWvpppp8TLbJ6tzaOmX7DqplJ_8PtblhGVtKCpqHDBm45QgYnEQ_oaMVngfkoyPhymrRoSGTE2or7I1LMUy1RuNRF_mUi9zYeJjxKPuY6yyiYNFdPSeeOzuXg8PoX_wr8g.4RcltHhAAAOWsN_ONvlvew3pvawDpitILxOYjiFMQb0%26version%3DPublished&cb=63899741267&encodeFailures=1&width=1052&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  },
  {
    id: 28,
    name: "Lynparza 100mg",
    type: "NSAID (Pain Relief)",
    storage: "Room Temperature",
    price: 35,
    prescription: true,
    image: "https://canadaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194562&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!byifaGuPM0SCKwXpNT26gVJyQpFx8w5Mri-uJpLGqrw_E9LovNJxS7UuE3chIFxQ%2Fitems%2F01EMBOX2DAZO2AFHSJ6BBZGZRVWQIWT75Q%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI2ODlmMjg2Zi04ZjZiLTQ0MzMtODIyYi0wNWU5MzUzZGJhODEiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzY2MDQ4NDAwIn0.IPzalCdL19tgC7faOhv06gqK8KzQzJai9D35tlZNft7TexDktbIQVmy-prVcdNxggnnKKF-HwWzyLOzUlUOn5H_O24jNtZWWMRn7L42lOjyIwLhAZ2z_Da-rLivlMgqCjczYZ9-a_DOQz4YUBJwZXpAwOOoLTyjivyJ_7kUlWQCOa-jenSCBG2GbLfl6BedwE5mMVUjnKIPtY2C8yOXMcTUsWyJbsaAzlXbim4SewV2GXfzdd80ron0LVwoG-xUAzNd-GDNZv5kMv7V3OCNs25i2YPG97vXpEF41FW4kNNHYLpOUToMsTpgA48n-qOsi_unJjy4z8Pmn7RLwhU4a-Dvfx2Wlg_LR7LzN9OWK_KUikVAsmtBhptNu40vLAj3z3cYa8O9KWuYF8bLP2VlWw9C6nlczGsHByQUIsUsrbTTnklKfLodyzDV-gXdXIOjsHmzpU2Dsa9DLFf7oQ1QulROmiPs_N2dT_l8JbC7O-N4.9E2cO_p46kh5Ovdfrv41PNjumPQ4tjmo4mQfATno4Cc%26version%3DPublished&cb=63899741266&encodeFailures=1&width=592&height=789",
    description: "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild to moderate pain, and helps to relieve symptoms of arthritis.",
    rating: 4.1,
    brand: "Novartis",
    dosage: "50 mg",
    quantity: "10 tablets",
    discount: 12,
    stock: "In Stock",
    delivery: "3 hours",
    category: "pain"
  }
];

const heroSlides = [
  {
    title: "Essential General Medicines",
    subtitle: "Prescription & OTC • Quality Assured • 24/7 Delivery",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Chronic Disease Management",
    subtitle: "Diabetes • Hypertension • Cholesterol • Thyroid Care",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80"
  }
];

const categories = [
  { id: "all", label: "All Products", icon: <Pill className="w-4 h-4" /> },
  { id: "fever", label: "Fever & Pain", icon: <span>🤒</span> },
  { id: "allergy", label: "Allergy", icon: <span>🤧</span> },
  { id: "diabetes", label: "Diabetes", icon: <AlertCircle className="w-4 h-4" /> },
  { id: "heart", label: "Heart Care", icon: <span>❤️</span> },
  { id: "digestive", label: "Digestive", icon: <span>🩺</span> },
  { id: "antibiotics", label: "Antibiotics", icon: <span>🦠</span> },
  { id: "vitamins", label: "Vitamins", icon: <span>💊</span> }
];

export default function MedicinesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof generalMedicines[0] | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter logic - EXACTLY like injections page
  const filteredProducts = generalMedicines
    .filter(product => {
      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = 
          product.name.toLowerCase().includes(searchLower) ||
          product.type.toLowerCase().includes(searchLower) ||
          product.brand?.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }
      
      // Category filter
      if (selectedCategory !== "all") {
        return product.category === selectedCategory;
      }
      
      return true;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return 0; // featured order
      }
    });

  const handleAddToCart = (product: typeof generalMedicines[0]) => {
    console.log("Added to cart:", product.name);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero - EXACTLY like injections page */}
      <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-1 bg-yellow-500 px-2 py-1 rounded-full mb-2">
                  <Pill className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">Pharmacy Specialists</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{slide.title}</h1>
                <p className="text-sm text-white/90 mb-3">{slide.subtitle}</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search medicines, brands..."
                    className="flex-1 py-2 px-3 rounded-lg text-sm"
                  />
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 py-6">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center justify-between w-full p-3 bg-white rounded-lg shadow-sm border border-blue-200"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-blue-800">Filters & Sort</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-blue-600 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filters Container - EXACTLY like injections page */}
        <div className={`${showMobileFilters ? 'block' : 'hidden lg:block'} mb-6`}>
          {/* Filter Header */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              {/* Heading */}
              <h3 className="text-xl font-bold text-blue-900">
                Browse <span className="text-yellow-500">Medicines</span>
                <span className="block text-sm font-normal text-blue-700 mt-1">
                  {filteredProducts.length} products found
                </span>
              </h3>

              {/* Sort Dropdown */}
              <div className="relative w-full sm:w-56">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none px-4 py-2 pr-10
                             bg-white border border-blue-300 rounded-lg
                             text-sm font-medium text-blue-900
                             focus:outline-none focus:ring-2 focus:ring-yellow-400
                             cursor-pointer"
                >
                  <option value="featured">⭐ Featured</option>
                  <option value="price-low">⬇ Price: Low to High</option>
                  <option value="price-high">⬆ Price: High to Low</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-600">
                  ▼
                </span>
              </div>
            </div>

            {/* Category Buttons */}
            <div className="mt-4">
              <h3 className="text-sm font-bold text-blue-800 mb-2">Filter by Category:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-blue-800 hover:bg-blue-100 border border-blue-300'
                    }`}
                  >
                    {category.icon}
                    <span className="text-xs font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== "all" || searchQuery) && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-yellow-800">Active Filters:</span>
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                    {categories.find(c => c.id === selectedCategory)?.label}
                    <button 
                      onClick={() => setSelectedCategory("all")}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">
                    Search: "{searchQuery}"
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="ml-1 text-yellow-600 hover:text-yellow-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button 
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="ml-auto text-xs text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total Medicines", value: "5000+", icon: "💊", color: "bg-blue-100" },
            { label: "Trusted Brands", value: "50+", icon: "🏆", color: "bg-yellow-100" },
            { label: "Cities Covered", value: "100+", icon: "📍", color: "bg-green-100" },
            { label: "Happy Customers", value: "1L+", icon: "😊", color: "bg-purple-100" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-3 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-base">{stat.icon}</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid - 2 Columns on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image */}
                <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300x300?text=Medicine";
                    }}
                  />
                  {/* Badges */}
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    {product.isNew && <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">NEW</span>}
                    {product.isHot && <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">HOT</span>}
                    {product.prescription && <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">RX</span>}
                    {product.isSale && <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">SALE</span>}
                  </div>
                  {/* Stock */}
                  {product.stock && (
                    <div className="absolute bottom-2 left-2">
                      <span className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        product.stock === "In Stock" 
                          ? "bg-green-100 text-green-800 border border-green-300"
                          : product.stock === "Limited Stock"
                          ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                          : "bg-red-100 text-red-800 border border-red-300"
                      }`}>
                        {product.stock}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-2 sm:p-3">
                  {/* Category */}
                  <div className="mb-1">
                    <span className="text-[10px] text-blue-600 font-medium uppercase">
                      {product.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>

                  {/* Brand */}
                  <div className="mb-2">
                    <span className="text-[10px] text-gray-500">by {product.brand}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline justify-between mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm sm:text-base font-bold text-gray-900">
                        ₹{product.price}
                      </span>
                      {product.discount && (
                        <span className="text-[10px] text-gray-400 line-through">
                          ₹{product.discount}
                        </span>
                      )}
                    </div>
                    {product.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* View Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="w-full py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <Pill className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">No medicines found</h3>
              <p className="text-gray-600 mb-4 max-w-md mx-auto">
                Try adjusting your filters or search for something else
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Safety Info */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-yellow-800 text-lg mb-2">⚠️ Medicine Safety Guidelines</h3>
              <p className="text-yellow-700 text-sm">
                Prescription medicines should only be taken under medical supervision.
                Consult your doctor before starting any new medication. Never self-medicate.
              </p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Storage Info */}
          <div className="bg-white border border-blue-200 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900">Storage Guidelines</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Store between 15-30°C
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Keep away from moisture
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Avoid bathroom storage
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Store out of children's reach
              </li>
            </ul>
          </div>

          {/* Usage Info */}
          <div className="bg-white border border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">Usage Guidelines</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Take medicines as prescribed
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Never share your medicines
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Complete antibiotic courses
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Check for drug interactions
              </li>
            </ul>
          </div>
        </div>

        {/* Brands */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trusted Pharmaceutical Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { name: "Cipla", logo: "💊" },
              { name: "Sun Pharma", logo: "☀️" },
              { name: "GSK", logo: "🏢" },
              { name: "Abbott", logo: "🏥" },
              { name: "Himalaya", logo: "⛰️" },
              { name: "Dr. Reddy's", logo: "👨‍⚕️" },
              { name: "Pfizer", logo: "🔬" },
              { name: "Novartis", logo: "💉" },
              { name: "USV", logo: "💊" },
              { name: "Mankind", logo: "👨‍👩‍👧‍👦" }
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-10 h-10 mx-auto mb-2 bg-blue-50 rounded-full flex items-center justify-center text-lg">
                  {brand.logo}
                </div>
                <span className="font-medium text-gray-800 text-sm">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Product Details - EXACTLY like injections page */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">Product Details</h2>
                  <p className="text-blue-100 text-sm">{selectedProduct.type}</p>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Image */}
                <div className="relative h-48 sm:h-64 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-contain p-4"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/400x400?text=Medicine";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{selectedProduct.name}</h3>
                    {selectedProduct.brand && <p className="text-sm text-gray-600">by {selectedProduct.brand}</p>}
                  </div>

                  {/* Rating */}
                  {selectedProduct.rating && (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-medium">{selectedProduct.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({Math.floor(Math.random() * 100) + 50} reviews)</span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{selectedProduct.price}
                    </span>
                    {selectedProduct.discount && (
                      <>
                        <span className="text-lg text-gray-400 line-through">
                          ₹{selectedProduct.discount}
                        </span>
                        <span className="text-xs bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded font-bold">
                          Save ₹{(selectedProduct.discount - selectedProduct.price)}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Description</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{selectedProduct.description}</p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-gray-200">
                    {selectedProduct.dosage && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Dosage</p>
                        <p className="text-sm font-medium text-gray-900">{selectedProduct.dosage}</p>
                      </div>
                    )}
                    {selectedProduct.storage && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Storage</p>
                        <p className="text-sm font-medium text-gray-900">{selectedProduct.storage}</p>
                      </div>
                    )}
                    {selectedProduct.quantity && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Package</p>
                        <p className="text-sm font-medium text-gray-900">{selectedProduct.quantity}</p>
                      </div>
                    )}
                    {selectedProduct.delivery && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Delivery</p>
                        <p className="text-sm font-medium text-gray-900 flex items-center gap-1">
                          <Truck className="w-3 h-3 text-blue-600" />
                          {selectedProduct.delivery}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Stock Status */}
                  {selectedProduct.stock && (
                    <div className={`px-3 py-2 rounded-lg ${
                      selectedProduct.stock === "In Stock" 
                        ? "bg-green-100 text-green-800"
                        : selectedProduct.stock === "Limited Stock"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      <span className="font-medium">{selectedProduct.stock}</span>
                    </div>
                  )}

                  {/* Prescription Warning */}
                  {selectedProduct.prescription && (
                    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">Prescription Required</span>
                      </div>
                      <p className="text-xs text-yellow-700 mt-1">
                        This medicine requires a valid doctor's prescription. Consult your physician before use.
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button 
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                    <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg transition-colors">
                      <span className="text-lg">❤️</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-6 text-center text-white shadow-lg">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
            <Phone className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-sm font-bold">24/7 Pharmacy Support</span>
          </div>
          
          <h2 className="text-xl font-bold mb-3">Need Medical Advice?</h2>
          <p className="text-blue-100 mb-4 max-w-lg mx-auto">
            Our licensed pharmacists are available 24/7 to help you with medicine information,
            dosage guidance, and health queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2">
              <span className="text-lg">👨‍⚕️</span>
              Consult Pharmacist
            </button>
            <button className="bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:bg-white/20 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              9903241021
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}