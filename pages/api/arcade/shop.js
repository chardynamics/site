import AirtablePlus from "airtable-plus"

export const shopParts = async () => {
  return [
    {
      "Name": "USB-C Charger",
      "Small Name": "(30W)",
      "Full Name": "USB-C Charger (30W)",
      "Description":
        "Small, uses the latest GaN technology, & charges fast - pretty sweet!",
      "Fulfillment Description": "Available US only. \n",
      "Cost Hours": 6,
      "id": "rec0yAytJaSyye10S",
      "Image URL":
        "https://cloud-lit9nkas9-hack-club-bot.vercel.app/051t9lfjeuml._ac_sl1500_.png",
      "Max Order Quantity": 1,
      "Stock": 51,
      "Category": ["Hardware"],
    },
    {
      "Name": "YubiKey",
      "Small Name": null,
      "Full Name": "YubiKey ",
      "Description": "5C NFC model w/ GitHub logo",
      "Fulfillment Description":
        "Fulfilled by USPS. Customs fees may apply if outside the US.\n",
      "Cost Hours": 15,
      "id": "rec1pCxBpw737NP3I",
      "Image URL":
        "https://cloud-elfpck7gj-hack-club-bot.vercel.app/0screenshot_2024-06-14_at_07.42.35.png",
      "Max Order Quantity": 5,
      "Stock": 1033,
      "Category": ["Hardware", "Swag"],
    },
    {
      "Name": "Tuxedo pick set",
      "Small Name": "+ clear training lock",
      "Full Name": "Tuxedo pick set + clear training lock",
      "Description": null,
      "Fulfillment Description":
        "Orders fulfilled by [Sparrows](https://www.sparrowslockpicks.com/pages/about) & can be shipped to any country they support. Customs fees may apply if outside the US.\n",
      "Cost Hours": 18,
      "id": "rec2ANqg9AUReF4BI",
      "Image URL":
        "https://cloud-8ikvjz9g0-hack-club-bot.vercel.app/0image.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": "",
    },
    {
      "Name": "Breadboard",
      "Small Name": "+ jumper wires",
      "Full Name": "Breadboard + jumper wires",
      "Description": null,
      "Fulfillment Description":
        "Available in US, IN, EU, CA, SG & AU. Fulfilled by Amazon.\n",
      "Cost Hours": 6,
      "id": "rec3kwLZQjCB84lpT",
      "Image URL":
        "https://cloud-ogt9k4r4u-hack-club-bot.vercel.app/0breadboard.png",
      "Max Order Quantity": 10,
      "Stock": null,
      "Category": ["Embedded Devices"],
    },
    {
      "Name": "Bambu Lab",
      "Small Name": "A1 mini",
      "Full Name": "Bambu Lab A1 mini",
      "Description": null,
      "Fulfillment Description":
        "Available in US, CA, SG, MY, TH, NZ, CH, AU, & EU. Shipping provided by Bambu Lab. You can check for [additional supported countries here](https://eu.store.bambulab.com/a/faq).\n",
      "Cost Hours": 135,
      "id": "rec58YSzn7V5x1GPR",
      "Image URL":
        "https://cloud-n8ijhwk64-hack-club-bot.vercel.app/0a1_mini.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Hardware"],
    },
    {
      "Name": "Invertocat Backback",
      "Small Name": "MIIR",
      "Full Name": "Invertocat Backback MIIR",
      "Description": null,
      "Fulfillment Description":
        "Fulfilled by USPS. Customs fees may apply if outside the US.\n",
      "Cost Hours": 70,
      "id": "rec5i2AZtzHAG5znC",
      "Image URL": "https://cloud-2wpezbt6a-hack-club-bot.vercel.app/1miir.png",
      "Max Order Quantity": 1,
      "Stock": 2,
      "Category": ["Swag"],
    },
    {
      "Name": "Soldering iron",
      "Small Name": "+ solder",
      "Full Name": "Soldering iron + solder",
      "Description": null,
      "Fulfillment Description":
        "Available in US, IN, EU, CA, SG & AU. Fulfilled by Amazon.\n",
      "Cost Hours": 8,
      "id": "rec5ssvcMqrSKneac",
      "Image URL":
        "https://cloud-amz50nt0a-hack-club-bot.vercel.app/0soldering_iron.png",
      "Max Order Quantity": 5,
      "Stock": null,
      "Category": ["Embedded Devices"],
    },
    {
      "Name": "Pile of stickers",
      "Small Name": null,
      "Full Name": "Pile of stickers ",
      "Description": "We'll send you 3 random stickers!\n",
      "Fulfillment Description": "Available anywhere\n",
      "Cost Hours": 1,
      "id": "rec7rzTHzjLa1ZysL",
      "Image URL":
        "https://cloud-c1gqq7ttf-hack-club-bot.vercel.app/0sticker_pile_2.png",
      "Max Order Quantity": 10,
      "Stock": null,
      "Category": ["Swag"],
    },
    {
      "Name": "Framework",
      "Small Name": "16 inch",
      "Full Name": "Framework 16 inch",
      "Description": null,
      "Fulfillment Description":
        "Available in [specific countries](https://knowledgebase.frame.work/what-countries-and-regions-do-you-ship-to-r1899ikiO). Ships via USPS– customs fees may apply.\n",
      "Cost Hours": 400,
      "id": "rec9cXQSlAJVnfJkv",
      "Image URL":
        "https://cloud-cqnd9gu78-hack-club-bot.vercel.app/0framework.png",
      "Max Order Quantity": 1,
      "Stock": 1,
      "Category": ["Hardware"],
    },
    {
      "Name": "E-fidgets",
      "Small Name": "Made by Micha!",
      "Full Name": "E-fidgets Made by Micha!",
      "Description": null,
      "Fulfillment Description":
        "Available worldwide. Customs fees may apply if outside the US.\n",
      "Cost Hours": 3,
      "id": "recC0FFWiXXLsgUTB",
      "Image URL":
        "https://cloud-r1yu83g5v-hack-club-bot.vercel.app/0image.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": "",
    },
    {
      "Name": "GitHub Keycaps",
      "Small Name": "x8",
      "Full Name": "GitHub Keycaps x8",
      "Description": null,
      "Fulfillment Description":
        "Fulfilled by USPS. Customs fees may apply if outside the US.\n",
      "Cost Hours": 15,
      "id": "recCEtkEWr6u8mCfd",
      "Image URL":
        "https://cloud-q3hnx73my-hack-club-bot.vercel.app/01542509_z_copy.png",
      "Max Order Quantity": 1,
      "Stock": 5,
      "Category": ["Swag"],
    },
    {
      "Name": "Prusa",
      "Small Name": "MINI+",
      "Full Name": "Prusa MINI+",
      "Description": null,
      "Fulfillment Description":
        "Available in US & EU. Customs fees outside the EU [may apply](https://help.prusa3d.com/article/vat-value-added-tax-customs-fees_1505#orders-outside-eu).\n",
      "Cost Hours": 130,
      "id": "recCeMp5iK7tRpqc3",
      "Image URL":
        "https://cloud-cqnd9gu78-hack-club-bot.vercel.app/1prusa.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Hardware"],
    },
    {
      "Name": "Multimeter",
      "Small Name": null,
      "Full Name": "Multimeter ",
      "Description": null,
      "Fulfillment Description":
        "Available in US, IN, EU, CA, SG & AU. Fulfilled by Amazon.\n",
      "Cost Hours": 7,
      "id": "recDJkGhWEU60NmBV",
      "Image URL":
        "https://cloud-fyxfbdwdl-hack-club-bot.vercel.app/0multimeter.png",
      "Max Order Quantity": 5,
      "Stock": null,
      "Category": ["Embedded Devices"],
    },
    {
      "Name": "Flipper",
      "Small Name": "Zero",
      "Full Name": "Flipper Zero",
      "Description": null,
      "Fulfillment Description":
        "Available in US & EU. Fulfilled by [Flipper Zero](https://shop.flipperzero.one/policies/shipping-policy).\n",
      "Cost Hours": 70,
      "id": "recDmVbngx6NdN6pA",
      "Image URL": "https://cloud-p2gdpsmd3-hack-club-bot.vercel.app/0top.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Hardware"],
    },
    {
      "Name": "MacBook",
      "Small Name": "Air M2",
      "Full Name": "MacBook Air M2",
      "Description": null,
      "Fulfillment Description":
        "Fulfilled by Apple & available anywhere Apple delivers.\n",
      "Cost Hours": 400,
      "id": "recFT8SlSOxFrG9ha",
      "Image URL":
        "https://cloud-9zwbzfbtw-hack-club-bot.vercel.app/00image_from_ios-removebg-preview.png",
      "Max Order Quantity": 1,
      "Stock": 10,
      "Category": ["Hardware"],
    },
    {
      "Name": "Ryobi ",
      "Small Name": "Rotary Tool Kit",
      "Full Name": "Ryobi  Rotary Tool Kit",
      "Description":
        "Like Dremel but... better. https://www.ryobitools.com/products/details/3328720530",
      "Fulfillment Description": "Available US only.\n",
      "Cost Hours": 55,
      "id": "recFYxckk8ays8qZC",
      "Image URL":
        "https://cloud-a7oi0q7go-hack-club-bot.vercel.app/0image.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": "",
    },
    {
      "Name": "Arcade Ticket Counter",
      "Small Name": "(Timer)",
      "Full Name": "Arcade Ticket Counter (Timer)",
      "Description": "(formerly the Hack Hour Clock)\n",
      "Fulfillment Description":
        "Fulfilled by USPS. Customs fees may apply if outside the US.\n",
      "Cost Hours": 7,
      "id": "recFlQknheFuFs4e9",
      "Image URL":
        "https://cloud-for73aw9b-hack-club-bot.vercel.app/019719_3.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Embedded Devices"],
    },
    {
      "Name": "Keychron",
      "Small Name": "K6 Pro",
      "Full Name": "Keychron K6 Pro",
      "Description": null,
      "Fulfillment Description":
        "Fulfilled by Keychron. [List of available countries](https://www.keychron.com/pages/shipping-policy).\n",
      "Cost Hours": 50,
      "id": "recGzOvroho1Dal4u",
      "Image URL": "https://cloud-ephagrx6o-hack-club-bot.vercel.app/1keeb.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Hardware"],
    },
    {
      "Name": "OpenAI credits",
      "Small Name": null,
      "Full Name": "OpenAI credits ",
      "Description": "We'll give you $10 worth of OpenAI credits!",
      "Fulfillment Description": "Available anywhere\n",
      "Cost Hours": 4,
      "id": "recJN0RO9obEGqP6e",
      "Image URL":
        "https://cloud-nozsvexvx-hack-club-bot.vercel.app/0universal_paperclips_title_screen.png",
      "Max Order Quantity": 10,
      "Stock": null,
      "Category": ["Software Powerups"],
    },
    {
      "Name": "Leatherman Skeletool",
      "Small Name": null,
      "Full Name": "Leatherman Skeletool ",
      "Description":
        "For those @cwalker cosplayers. https://www.leatherman.com/skeletool-18.html",
      "Fulfillment Description":
        "Orders fulfilled by [Leatherman](https://www.leatherman.com/country-selector.html?hrefkey=hreflang-830845). Available in US only. \n",
      "Cost Hours": 25,
      "id": "recK0j5EPlWOx2SQq",
      "Image URL":
        "https://cloud-dcmjamx8y-hack-club-bot.vercel.app/0image.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": "",
    },
    {
      "Name": "Raspberry Pi",
      "Small Name": "Zero 2 W",
      "Full Name": "Raspberry Pi Zero 2 W",
      "Description":
        "The Raspberry Pi Zero 2 W comes with a micro SD card (at least 32GB), reader, & power supply.",
      "Fulfillment Description":
        "Available everywhere, but customs fees may apply outside the US.\n",
      "Cost Hours": 10,
      "id": "recOWGBXUReYUoaUp",
      "Image URL":
        "https://cloud-5di8nhlvy-hack-club-bot.vercel.app/0image.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Embedded Devices"],
    },
    {
      "Name": "Samsung T7 1TB SSD",
      "Small Name": "(1,050MB/s, beige)",
      "Full Name": "Samsung T7 1TB SSD (1,050MB/s, beige)",
      "Description": "Supa dupa fast and rugged portable SSD",
      "Fulfillment Description":
        "Available anywhere. Customs fees may apply if outside the US.\n",
      "Cost Hours": 38,
      "id": "recOx6JaqK3cAvFVV",
      "Image URL":
        "https://cloud-pnx1i6khl-hack-club-bot.vercel.app/051_7tbplikl._ac_sl1500_.png",
      "Max Order Quantity": 1,
      "Stock": 0,
      "Category": ["Hardware"],
    },
    {
      "Name": "Notebook",
      "Small Name": "from GitHub",
      "Full Name": "Notebook from GitHub",
      "Description":
        "A Denik Layflat from the [GitHub Shop](https://www.thegithubshop.com/1455318-00-denik-layflat-notebook)",
      "Fulfillment Description": "Available in the US.\n",
      "Cost Hours": 5,
      "id": "recPP2L3kPwDYmu0B",
      "Image URL":
        "https://cloud-2wpezbt6a-hack-club-bot.vercel.app/0notebook.png",
      "Max Order Quantity": 1,
      "Stock": 30,
      "Category": ["Swag"],
    },
    {
      "Name": "Pinecil",
      "Small Name": null,
      "Full Name": "Pinecil ",
      "Description": null,
      "Fulfillment Description":
        "Fulfilled by USPS. Customs fees may apply if outside the US.\n",
      "Cost Hours": 14,
      "id": "recSXzyxP636j4dee",
      "Image URL":
        "https://cloud-3lhacr9fo-hack-club-bot.vercel.app/061ix8eet_dl._ac_sx679_.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Embedded Devices"],
    },
    {
      "Name": "Logic Analyzer",
      "Small Name": null,
      "Full Name": "Logic Analyzer ",
      "Description": null,
      "Fulfillment Description":
        "Available in US, IN, EU, CA, SG & AU. Fulfilled by Amazon.\n",
      "Cost Hours": 5,
      "id": "recYa7NF3Amqcvf0i",
      "Image URL":
        "https://cloud-re8ou8f0i-hack-club-bot.vercel.app/0image.png",
      "Max Order Quantity": 5,
      "Stock": null,
      "Category": ["Embedded Devices"],
    },
    {
      "Name": "Domain",
      "Small Name": "for 1 year",
      "Full Name": "Domain for 1 year",
      "Description": null,
      "Fulfillment Description":
        "Available in every IP range, includes shipping and handling /j\n",
      "Cost Hours": 4,
      "id": "reca4tNvbZ6JLTcUH",
      "Image URL":
        "https://cloud-5ttcbislu-hack-club-bot.vercel.app/2screenshot_2024-06-16_at_19.34.55.png",
      "Max Order Quantity": 10,
      "Stock": null,
      "Category": ["Software Powerups"],
    },
    {
      "Name": "iPad",
      "Small Name": "10th Gen + 1st Gen Apple Pencil",
      "Full Name": "iPad 10th Gen + 1st Gen Apple Pencil",
      "Description":
        "Tablet (+ more) & what we wish we'd had for making this project!\n\nThis comes with the 1st gen pencil + a lightning to USB-C converter",
      "Fulfillment Description":
        "Fulfilled by Apple & available anywhere Apple delivers.\n",
      "Cost Hours": 160,
      "id": "rece7XQEjvi9GQj8A",
      "Image URL": "https://cloud-k0uz9sh1c-hack-club-bot.vercel.app/2ipad.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Hardware", "Art Supplies"],
    },
    {
      "Name": "Framework",
      "Small Name": "factory seconds",
      "Full Name": "Framework factory seconds",
      "Description": null,
      "Fulfillment Description":
        "Available in [specific countries](https://knowledgebase.frame.work/what-countries-and-regions-do-you-ship-to-r1899ikiO). Ships via USPS– customs fees may apply.\n",
      "Cost Hours": 120,
      "id": "reciRscdVv46bC7cf",
      "Image URL":
        "https://cloud-elfpck7gj-hack-club-bot.vercel.app/1screenshot_2024-06-14_at_07.39.22.png",
      "Max Order Quantity": 1,
      "Stock": 0,
      "Category": ["Hardware"],
    },
    {
      "Name": "Nvidia Tesla P40 GPU",
      "Small Name": "(24GB GDDR5)",
      "Full Name": "Nvidia Tesla P40 GPU (24GB GDDR5)",
      "Description":
        "Great for AI stuff, r/LocalLLAMA's favorite GPU! Bad for gaming.",
      "Fulfillment Description":
        "Available anywhere. Customs fees may apply if outside the US.\n",
      "Cost Hours": 120,
      "id": "reciugSIxWJVmWBjG",
      "Image URL":
        "https://cloud-7lhnywkqd-hack-club-bot.vercel.app/0nvidia-tesla-p40_b1ac5a43-34ac-4cd4-8450-3ad7e27321ae_2000x.png",
      "Max Order Quantity": 1,
      "Stock": 2,
      "Category": ["Hardware"],
    },
    {
      "Name": "Framework",
      "Small Name": "13 inch",
      "Full Name": "Framework 13 inch",
      "Description": null,
      "Fulfillment Description":
        "Available in [specific countries](https://knowledgebase.frame.work/what-countries-and-regions-do-you-ship-to-r1899ikiO). Ships via USPS– customs fees may apply.\n",
      "Cost Hours": 175,
      "id": "recj3qt349e2KXW6X",
      "Image URL": "https://cloud-g0bjmr0sz-hack-club-bot.vercel.app/013in.png",
      "Max Order Quantity": 1,
      "Stock": 0,
      "Category": ["Hardware"],
    },
    {
      "Name": "Wacom",
      "Small Name": "One display",
      "Full Name": "Wacom One display",
      "Description":
        "Drawing tablet & the exact model we used on this project!",
      "Fulfillment Description":
        "Available in US, IN, EU, CA, SG & AU. Fulfilled by Amazon.\n",
      "Cost Hours": 90,
      "id": "reclyjIns73XfGMZ1",
      "Image URL":
        "https://cloud-c6nos84m4-hack-club-bot.vercel.app/061zj7gvrvsl._ac_sx679_.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Hardware", "Art Supplies"],
    },
    {
      "Name": "Wacom",
      "Small Name": "Intuos S",
      "Full Name": "Wacom Intuos S",
      "Description": null,
      "Fulfillment Description":
        "Available in US, IN, EU, CA, SG & AU. Fulfilled by Amazon.\n",
      "Cost Hours": 25,
      "id": "recoatqwqCXrsiAoz",
      "Image URL":
        "https://cloud-bi9lc9poq-hack-club-bot.vercel.app/0intuos.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Hardware", "Art Supplies"],
    },
    {
      "Name": "Logitech",
      "Small Name": "MX Mechanical",
      "Full Name": "Logitech MX Mechanical",
      "Description": null,
      "Fulfillment Description":
        "Fulfilled by USPS. Customs fees may apply if outside the US.\n",
      "Cost Hours": 75,
      "id": "recrybqL6E6d4tzoe",
      "Image URL":
        "https://cloud-gt96uxjmh-hack-club-bot.vercel.app/061__ok6aqtl._ac_uf894_1000_ql80_.png",
      "Max Order Quantity": 1,
      "Stock": 50,
      "Category": ["Hardware"],
    },
    {
      "Name": "Helping hands",
      "Small Name": null,
      "Full Name": "Helping hands ",
      "Description": null,
      "Fulfillment Description": "Available in US, CA, UK, EU, AU, and SG. \n",
      "Cost Hours": 9,
      "id": "recskR2ZCiCWQPgTy",
      "Image URL":
        "https://cloud-nhghqjofw-hack-club-bot.vercel.app/0image.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": "",
    },
    {
      "Name": "Good Sci-Fi Book",
      "Small Name": null,
      "Full Name": "Good Sci-Fi Book ",
      "Description":
        "Zach Latta, founder of Hack Club, will send you one of his favs. Books are used.",
      "Fulfillment Description": "Available US only. \n",
      "Cost Hours": 4,
      "id": "recsqHsV34CBTFN2T",
      "Image URL":
        "https://cloud-lr8bs9gzg-hack-club-bot.vercel.app/0books.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Hardware"],
    },
    {
      "Name": "Logitech Mouse",
      "Small Name": "MX Anywhere 2S",
      "Full Name": "Logitech Mouse MX Anywhere 2S",
      "Description":
        "https://www.logitech.com/en-us/eol/mx-anywhere-2s-mouse.910-005132.html",
      "Fulfillment Description":
        "Available anywhere. Customs fees may apply if outside the US.\n",
      "Cost Hours": 25,
      "id": "rectkgw2Vy7fRWxZI",
      "Image URL":
        "https://cloud-77ecxp5zt-hack-club-bot.vercel.app/0image.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": "",
    },
    {
      "Name": "Quest 3",
      "Small Name": null,
      "Full Name": "Quest 3 ",
      "Description": null,
      "Fulfillment Description":
        "Available in [specific countries](https://www.meta.com/help/orders-and-returns/articles/quest-supported-countries/). Fulfilled by Meta.\n",
      "Cost Hours": 200,
      "id": "recuol7Uk5Z2sjViv",
      "Image URL":
        "https://cloud-7x2qyu0b9-hack-club-bot.vercel.app/0screenshot_2024-06-14_at_08.46.20.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": ["Hardware"],
    },
    {
      "Name": "Sticker",
      "Small Name": "of your choice",
      "Full Name": "Sticker of your choice",
      "Description": null,
      "Fulfillment Description": "Available anywhere\n",
      "Cost Hours": 2,
      "id": "recvsJVFthUTnozTO",
      "Image URL":
        "https://cloud-50x4zfjwx-hack-club-bot.vercel.app/0enjoy_1.png",
      "Max Order Quantity": 10,
      "Stock": null,
      "Category": ["Swag"],
    },
    {
      "Name": "Ryobi ",
      "Small Name": "4 Tool Combo Kit",
      "Full Name": "Ryobi  4 Tool Combo Kit",
      "Description": "https://www.ryobitools.com/products/details/33287200146",
      "Fulfillment Description": "Available US only. \n",
      "Cost Hours": 55,
      "id": "recy2MfTooxxeNjGG",
      "Image URL":
        "https://cloud-midghinuq-hack-club-bot.vercel.app/0image.png",
      "Max Order Quantity": 1,
      "Stock": null,
      "Category": "",
    },
    {
      "Name": "Octocat",
      "Small Name": "Plushie",
      "Full Name": "Octocat Plushie",
      "Description": null,
      "Fulfillment Description":
        "Fulfilled by USPS. Customs fees may apply if outside the US.\n",
      "Cost Hours": 15,
      "id": "reczeivgpqIj7ajA2",
      "Image URL":
        "https://cloud-n716uf1pe-hack-club-bot.vercel.app/0gh_0008_z_dd7b_copy.png",
      "Max Order Quantity": 1,
      "Stock": 15,
      "Category": ["Swag"],
    },
  ];
};

export default async function handler(req, res) {
  const data = await shopParts()
  return res.json(filteredData)
}