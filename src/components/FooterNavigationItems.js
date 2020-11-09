import NavbarNavigationItems from './NavbarNavigationItems'

const footerPages = [...NavbarNavigationItems];
const footerServices = [
    {
        title: "داروخانه آنلاین",
        href: "#online-pharmacy",
        active: false
    },
    {
        title: "فروشگاه آنلاین",
        href: "#online-market",
        active: false
    },
    {
        title: "ویزیت آنلاین",
        href: "#online-visit",
        active: false
    },
    {
        title: "پرونده پزشکی",
        href: "#health-record",
        active: false
    }];

export {
    footerPages,
    footerServices
}
