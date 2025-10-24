function banners() {
    const banner1 = {
        title: "Company 1",
        imageSrc: "/src/images/company_1.jpeg",
        imageAlt: "Image of company 1!",
        description: "111 Aaa bbb ccc ddd eee",
    }

    const banner2 = {
        title: "Company 2",
        imageSrc: "/src/images/company_2.webp",
        imageAlt: "Image of company 2!",
        description: "222 Aaa bbb ccc ddd eee",
    }

    const banner3 = {
        title: "Company 3",
        imageSrc: "/src/images/company_3.webp",
        imageAlt: "Image of company 3!",
        description: "333 Aaa bbb ccc ddd eee",
    }

    const banner4 = {
        title: "Company 4",
        imageSrc: './x\" onerror="alert(\'Ti ho fregato!\')',
        imageAlt: "Image of company 4!",
        description: "444 Aaa bbb ccc ddd eee",
    }

    return [
        banner1,
        banner2,
        banner3,
        banner4,
    ];
}

export default banners;