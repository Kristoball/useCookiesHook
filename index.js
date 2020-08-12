const { useState } = require("react");
const Cookies = require("js-cookie");

function useCookie(cookieName, value) {
    const [cookie, setCookieInternal] = useState(Cookies.get(name));

    function removeCookie() {
        setCookie(null);
        Cookies.remove(name);
    }
    function setCookie(value) {
        Cookies.set(name, value);
        setCookieInternal(Cookies.get(name));
    }

    return [cookie, setCookie, removeCookie];
}

module.exports = useCookie;
