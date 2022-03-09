// ==UserScript==
// @name         Block sites
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @match        http://*/*
// @grant        none
// @run-at: document-start
// ==/UserScript==

const metricsToRead = JSON.parse(localStorage.getItem("blockedSiteData") || "{}")
var visits = metricsToRead.visits || 0

function reportMetrics() {
    const metricsToStore = {
        "visits": visits,
        "timeRemaining": 0,
        "visitMap": {}
    }
    localStorage.setItem("blockedSiteData", JSON.stringify(metricsToStore))
}

function leaveBlockedSites() {
    const bannedSiteRegexps = []
    const bannedRegexp = new RegExp(`.*${bannedSiteRegexps.join(".*|.*")}.*`)

    const curUrl = window.location.href
    if (bannedRegexp.test(curUrl)) {
        visits++
        console.log(`The site ${curUrl} is blocked`)
        reportMetrics()
        alert(`The site ${curUrl} is blocked. \nblocked site visits: ${visits}`)
        1/0
        location.href = "https://localhost"
    }
}

leaveBlockedSites()



