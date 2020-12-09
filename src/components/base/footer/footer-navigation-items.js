import NavbarNavigationItems from '../navbar/NavbarNavigationItems'

const footerPages = [...NavbarNavigationItems];
const footerServices = [
    {
        title: "سوالات متداول",
        href: "/faq",
        active: false
    },
    {
        title: "قوانین و شرایط",
        href: "/termandconditions",
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
