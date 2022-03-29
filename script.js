var names = ["Apple", "Microsoft", "Alphabet", "Samsung", "Meta", "Sony", "Intel", "Lenovo", "LG", "HP"];
var contents = ["Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services. Apple is the largest information technology company by revenue (totaling US$365.8 billion in 2021) and, as of January 2021, it is the world's most valuable company, the fourth-largest personal computer vendor by unit sales and second-largest mobile phone manufacturer. It is one of the Big Five American information technology companies, alongside Alphabet, Amazon, Meta, and Microsoft.",

"Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services. Its best-known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the largest United States corporations by total revenue; it was the world's largest software maker by revenue as of 2016. It is one of the Big Five American information technology companies, alongside Google, Amazon, Apple, and Meta.",

"Alphabet Inc. is an American multinational technology conglomerate holding company headquartered in Mountain View, California. It was created through a restructuring of Google on October 2, 2015, and became the parent company of Google and several former Google subsidiaries. The two co-founders of Google remained as controlling shareholders, board members, and employees at Alphabet. Alphabet is the world's third-largest technology company by revenue and one of the world's most valuable companies. It is one of the Big Five American information technology companies, alongside Amazon, Apple, Meta and Microsoft.",

"The Samsung Group (or simply Samsung, stylized in logo as SΛMSUNG) (Korean: 삼성)  is a South Korean multinational manufacturing conglomerate headquartered in Samsung Town, Seoul, South Korea. It comprises numerous affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol (business conglomerate). As of 2020, Samsung has the 8th highest global brand value.",

"Meta Platforms, Inc., doing business as Meta and formerly known as Facebook, Inc., and Facebook.com Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company is the parent organization of Facebook, Instagram, and WhatsApp, among other subsidiaries. Meta is one of the world's most valuable companies. It is one of the Big Five American information technology companies, alongside Google, Amazon, Apple, and Microsoft.",

"Sony Group Corporation (ソニーグループ株式会社, Sonī Gurūpu kabushiki gaisha, /ˈsoʊni/ SOH-nee), commonly known as Sony and stylized as SONY, is a Japanese multinational conglomerate corporation headquartered in Kōnan, Minato, Tokyo, Japan. As a major technology company, it operates as one of the world's largest manufacturers of consumer and professional electronic products, the largest video game console company and the largest video game publisher. Through Sony Entertainment Inc, it is one of the largest music companies (largest music publisher & second largest record label) and the third largest film studio, making it one of the most comprehensive media companies. It is the largest technology and media conglomerate in Japan. At the same period, it is also recognized as the most cash-rich Japanese company, with its net cash reserves of ¥2 trillion.",

"Intel Corporation, stylized as intel, is an American multinational corporation and technology company headquartered in Santa Clara, California. It is the world's largest semiconductor chip manufacturer by revenue, and is the developer of the x86 series of microprocessors, the processors found in most personal computers (PCs). Incorporated in Delaware, Intel ranked No. 45 in the 2020 Fortune 500 list of the largest United States corporations by total revenue for nearly a decade, from 2007 to 2016 fiscal years.",

"Lenovo Group Limited, often shortened to Lenovo (/ləˈnoʊvoʊ/ lə-NOH-voh, Chinese: 联想), is a Chinese-American multinational technology company specializing in designing, manufacturing, and marketing consumer electronics, personal computers, software, business solutions, and related services. Products manufactured by the company include desktop computers, laptops, tablet computers, smartphones, workstations, servers, supercomputers, electronic storage devices, IT management software, and smart televisions. Its best-known brands include IBM's ThinkPad business line of laptop computers, the IdeaPad, Yoga, and Legion consumer lines of laptop computers, and the IdeaCentre and ThinkCentre lines of desktop computers. As of January 2021, Lenovo is the world's largest personal computer vendor by unit sales.",

"LG Corporation (or LG Group) (Korean: 엘지), formerly Lucky-Goldstar from 1983 to 1995 (Korean: Leokki Geumseong; Korean: 럭키금성; Hanja: 樂喜金星), is a South Korean multinational conglomerate corporation founded by Koo In-hwoi and managed by successive generations of his family. It is the fourth-largest chaebol in South Korea. Its headquarters are in the LG Twin Towers building in Yeouido-dong, Yeongdeungpo District, Seoul. LG makes electronics, chemicals, and telecommunications products and operates subsidiaries such as LG Electronics, Zenith, LG Display, LG Uplus, LG Innotek, LG Chem, and LG Energy Solution in over 80 countries.",

"HP Inc. is an American multinational information technology company headquartered in Palo Alto, California, that develops personal computers (PCs), printers and related supplies, as well as 3D printing solutions."];
var images = ["apple.png", "microsoft.jpeg", "alphabet.png", "samsung.png", "meta.png", "sony.png", "intel.png", "lenovo.png", "lg.png", "hp.jpeg"];

$(".listItems").html("");

$(".popup").hide();
$(".overlay").hide();

for(i = 0; i < names.length; i++) {
    var listItem = document.createElement("div");
    listItem.classList.add("listItem");

    var listItemTitle = document.createElement("div");
    listItemTitle.classList.add("listItemTitle");
    listItemTitle.innerHTML = names[i];

    listItem.appendChild(listItemTitle);

    var listItemButton = document.createElement("button");
    listItemButton.classList.add("listItemBtn");
    listItemButton.id = i.toString();
    listItemButton.innerHTML = '<i class="fa-solid fa-info"></i>';
    listItemButton.addEventListener("click", function() {
        $(".popup").show();
        $(".overlay").show();
        $(".popupTitle").html(names[parseInt(this.id)]);
        $(".popupContent").html(contents[parseInt(this.id)]);
        $(".popupImg").attr("src", "images/" + images[parseInt(this.id)])
    });

    listItem.appendChild(listItemButton);

    document.querySelector(".listItems").appendChild(listItem);
}

$('.overlay').on('click', function() {
    $(".popup").hide();
    $('.overlay').hide();
});