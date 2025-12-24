module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/utils/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CACHE_KEYS",
    ()=>CACHE_KEYS,
    "CITIES",
    ()=>CITIES,
    "WEATHER_API_KEY",
    ()=>WEATHER_API_KEY,
    "WEATHER_API_URL",
    ()=>WEATHER_API_URL,
    "WEATHER_CONDITIONS",
    ()=>WEATHER_CONDITIONS
]);
const WEATHER_API_KEY = ("TURBOPACK compile-time value", "e7c8b9804cc863f3dec917337ab8f5c4");
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const CITIES = [
    {
        id: 1,
        name: 'Jakarta',
        lat: -6.2088,
        lon: 106.8456
    },
    {
        id: 2,
        name: 'Surabaya',
        lat: -7.2575,
        lon: 112.7521
    },
    {
        id: 3,
        name: 'Bandung',
        lat: -6.9175,
        lon: 107.6191
    },
    {
        id: 4,
        name: 'Medan',
        lat: 3.5952,
        lon: 98.6722
    },
    {
        id: 5,
        name: 'Makassar',
        lat: -5.1477,
        lon: 119.4327
    },
    {
        id: 6,
        name: 'Semarang',
        lat: -6.9667,
        lon: 110.4167
    },
    {
        id: 7,
        name: 'Palembang',
        lat: -2.9761,
        lon: 104.7759
    },
    {
        id: 8,
        name: 'Denpasar',
        lat: -8.6705,
        lon: 115.2126
    }
];
const WEATHER_CONDITIONS = {
    '01d': 'Cerah',
    '01n': 'Cerah Malam',
    '02d': 'Sedikit Berawan',
    '02n': 'Sedikit Berawan Malam',
    '03d': 'Berawan',
    '03n': 'Berawan Malam',
    '04d': 'Mendung',
    '04n': 'Mendung Malam',
    '09d': 'Hujan Ringan',
    '09n': 'Hujan Ringan Malam',
    '10d': 'Hujan',
    '10n': 'Hujan Malam',
    '11d': 'Badai Petir',
    '11n': 'Badai Petir Malam',
    '13d': 'Salju',
    '13n': 'Salju Malam',
    '50d': 'Kabut',
    '50n': 'Kabut Malam'
};
const CACHE_KEYS = {
    CURRENT_WEATHER: 'current-weather',
    FORECAST: 'weather-forecast',
    LOCATION: 'user-location'
};
}),
"[project]/components/WeatherCard.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cityName": "WeatherCard-module__XewneW__cityName",
  "currentTemp": "WeatherCard-module__XewneW__currentTemp",
  "date": "WeatherCard-module__XewneW__date",
  "detailItem": "WeatherCard-module__XewneW__detailItem",
  "detailLabel": "WeatherCard-module__XewneW__detailLabel",
  "detailValue": "WeatherCard-module__XewneW__detailValue",
  "feelsLike": "WeatherCard-module__XewneW__feelsLike",
  "sunIcon": "WeatherCard-module__XewneW__sunIcon",
  "sunLabel": "WeatherCard-module__XewneW__sunLabel",
  "sunTime": "WeatherCard-module__XewneW__sunTime",
  "sunTimes": "WeatherCard-module__XewneW__sunTimes",
  "sunValue": "WeatherCard-module__XewneW__sunValue",
  "tempUnit": "WeatherCard-module__XewneW__tempUnit",
  "temperatureContainer": "WeatherCard-module__XewneW__temperatureContainer",
  "weatherBody": "WeatherCard-module__XewneW__weatherBody",
  "weatherCard": "WeatherCard-module__XewneW__weatherCard",
  "weatherDescription": "WeatherCard-module__XewneW__weatherDescription",
  "weatherDetails": "WeatherCard-module__XewneW__weatherDetails",
  "weatherHeader": "WeatherCard-module__XewneW__weatherHeader",
  "weatherIcon": "WeatherCard-module__XewneW__weatherIcon",
});
}),
"[project]/components/WeatherCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeatherCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/WeatherCard.module.css [app-ssr] (css module)");
;
;
;
function WeatherCard({ weather, cityName, temperatureUnit, convertTemperature }) {
    if (!weather) return null;
    const getWeatherIcon = (iconCode)=>{
        return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    };
    const formatDate = (timestamp)=>{
        return new Date(timestamp * 1000).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weatherCard} fade-in`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weatherHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cityName,
                                children: cityName
                            }, void 0, false, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].date,
                                children: formatDate(weather.dt)
                            }, void 0, false, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WeatherCard.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].temperatureContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].currentTemp,
                                children: [
                                    convertTemperature(weather.main.temp),
                                    "°",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tempUnit,
                                        children: temperatureUnit === 'celsius' ? 'C' : 'F'
                                    }, void 0, false, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].feelsLike,
                                children: [
                                    "Terasa seperti ",
                                    convertTemperature(weather.main.feels_like),
                                    "°",
                                    temperatureUnit === 'celsius' ? 'C' : 'F'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WeatherCard.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WeatherCard.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weatherBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weatherIcon,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: getWeatherIcon(weather.weather[0].icon),
                                alt: weather.weather[0].description,
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weatherDescription,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER_CONDITIONS"][weather.weather[0].icon] || weather.weather[0].description
                            }, void 0, false, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WeatherCard.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weatherDetails,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailLabel,
                                        children: "Kelembaban"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailValue,
                                        children: [
                                            weather.main.humidity,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailLabel,
                                        children: "Angin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailValue,
                                        children: [
                                            weather.wind.speed,
                                            " m/s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailLabel,
                                        children: "Tekanan"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailValue,
                                        children: [
                                            weather.main.pressure,
                                            " hPa"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailLabel,
                                        children: "Visibilitas"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailValue,
                                        children: [
                                            (weather.visibility / 1000).toFixed(1),
                                            " km"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailLabel,
                                        children: "Suhu Min"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailValue,
                                        children: [
                                            convertTemperature(weather.main.temp_min),
                                            "°"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailLabel,
                                        children: "Suhu Max"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailValue,
                                        children: [
                                            convertTemperature(weather.main.temp_max),
                                            "°"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/WeatherCard.js",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WeatherCard.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WeatherCard.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sunTimes,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sunTime,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sunIcon,
                                children: "🌅"
                            }, void 0, false, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sunLabel,
                                children: "Terbit"
                            }, void 0, false, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sunValue,
                                children: new Date(weather.sys.sunrise * 1000).toLocaleTimeString('id-ID', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WeatherCard.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sunTime,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sunIcon,
                                children: "🌇"
                            }, void 0, false, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sunLabel,
                                children: "Terbenam"
                            }, void 0, false, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sunValue,
                                children: new Date(weather.sys.sunset * 1000).toLocaleTimeString('id-ID', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/WeatherCard.js",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WeatherCard.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WeatherCard.js",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WeatherCard.js",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ForecastList.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "date": "ForecastList-module__BGJpcG__date",
  "forecastDate": "ForecastList-module__BGJpcG__forecastDate",
  "forecastIcon": "ForecastList-module__BGJpcG__forecastIcon",
  "forecastItem": "ForecastList-module__BGJpcG__forecastItem",
  "forecastList": "ForecastList-module__BGJpcG__forecastList",
  "forecastTemps": "ForecastList-module__BGJpcG__forecastTemps",
  "tempMax": "ForecastList-module__BGJpcG__tempMax",
  "tempMin": "ForecastList-module__BGJpcG__tempMin",
  "tempRange": "ForecastList-module__BGJpcG__tempRange",
  "tempSeparator": "ForecastList-module__BGJpcG__tempSeparator",
  "weatherText": "ForecastList-module__BGJpcG__weatherText",
  "weekday": "ForecastList-module__BGJpcG__weekday",
});
}),
"[project]/components/ForecastList.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForecastList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ForecastList.module.css [app-ssr] (css module)");
;
;
;
function ForecastList({ forecast, temperatureUnit, convertTemperature }) {
    if (!forecast || forecast.length === 0) return null;
    const groupByDay = (forecastList)=>{
        const grouped = {};
        forecastList.forEach((item)=>{
            const date = new Date(item.dt * 1000).toLocaleDateString('id-ID', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
            });
            if (!grouped[date]) {
                grouped[date] = [];
            }
            grouped[date].push(item);
        });
        return Object.entries(grouped).slice(0, 5); // Ambil 5 hari pertama
    };
    const getDaySummary = (dayForecast)=>{
        const temps = dayForecast.map((f)=>f.main.temp);
        const minTemp = Math.min(...temps);
        const maxTemp = Math.max(...temps);
        const mainWeather = dayForecast[Math.floor(dayForecast.length / 2)].weather[0];
        return {
            minTemp,
            maxTemp,
            icon: mainWeather.icon,
            description: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER_CONDITIONS"][mainWeather.icon] || mainWeather.description
        };
    };
    const dailyForecasts = groupByDay(forecast);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].forecastList,
        children: dailyForecasts.map(([date, dayForecast], index)=>{
            const summary = getDaySummary(dayForecast);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].forecastItem} fade-in`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].forecastDate,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weekday,
                                children: date.split(',')[0]
                            }, void 0, false, {
                                fileName: "[project]/components/ForecastList.js",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].date,
                                children: date.split(',')[1]
                            }, void 0, false, {
                                fileName: "[project]/components/ForecastList.js",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ForecastList.js",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].forecastIcon,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `https://openweathermap.org/img/wn/${summary.icon}.png`,
                                alt: summary.description,
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/components/ForecastList.js",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weatherText,
                                children: summary.description
                            }, void 0, false, {
                                fileName: "[project]/components/ForecastList.js",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ForecastList.js",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].forecastTemps,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tempRange,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tempMax,
                                    children: [
                                        convertTemperature(summary.maxTemp),
                                        "°",
                                        temperatureUnit === 'celsius' ? 'C' : 'F'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ForecastList.js",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tempSeparator,
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/components/ForecastList.js",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tempMin,
                                    children: [
                                        convertTemperature(summary.minTemp),
                                        "°",
                                        temperatureUnit === 'celsius' ? 'C' : 'F'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ForecastList.js",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ForecastList.js",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ForecastList.js",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/components/ForecastList.js",
                lineNumber: 47,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/ForecastList.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/LocationSelector.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "LocationSelector-module__ZwERTW__active",
  "arrow": "LocationSelector-module__ZwERTW__arrow",
  "buttonContent": "LocationSelector-module__ZwERTW__buttonContent",
  "cityCoordinates": "LocationSelector-module__ZwERTW__cityCoordinates",
  "cityName": "LocationSelector-module__ZwERTW__cityName",
  "dropdown": "LocationSelector-module__ZwERTW__dropdown",
  "dropdownItem": "LocationSelector-module__ZwERTW__dropdownItem",
  "locationIcon": "LocationSelector-module__ZwERTW__locationIcon",
  "locationSelector": "LocationSelector-module__ZwERTW__locationSelector",
  "open": "LocationSelector-module__ZwERTW__open",
  "selectedCity": "LocationSelector-module__ZwERTW__selectedCity",
  "selectorButton": "LocationSelector-module__ZwERTW__selectorButton",
});
}),
"[project]/components/LocationSelector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/LocationSelector.module.css [app-ssr] (css module)");
;
;
;
function LocationSelector({ cities, selectedCity, onCityChange, loading }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSelect = (city)=>{
        onCityChange(city);
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].locationSelector,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectorButton,
                onClick: ()=>setIsOpen(!isOpen),
                disabled: loading,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttonContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].locationIcon,
                            children: "📍"
                        }, void 0, false, {
                            fileName: "[project]/components/LocationSelector.js",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedCity,
                            children: selectedCity.name
                        }, void 0, false, {
                            fileName: "[project]/components/LocationSelector.js",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrow} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].open : ''}`,
                            children: "▼"
                        }, void 0, false, {
                            fileName: "[project]/components/LocationSelector.js",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LocationSelector.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/LocationSelector.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdown,
                children: cities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownItem} ${selectedCity.id === city.id ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                        onClick: ()=>handleSelect(city),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cityName,
                                children: city.name
                            }, void 0, false, {
                                fileName: "[project]/components/LocationSelector.js",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cityCoordinates,
                                children: [
                                    city.lat.toFixed(2),
                                    "°, ",
                                    city.lon.toFixed(2),
                                    "°"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LocationSelector.js",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)
                        ]
                    }, city.id, true, {
                        fileName: "[project]/components/LocationSelector.js",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/LocationSelector.js",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LocationSelector.js",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/NotificationManager.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "default": "NotificationManager-module__wxcMZa__default",
  "denied": "NotificationManager-module__wxcMZa__denied",
  "deniedMessage": "NotificationManager-module__wxcMZa__deniedMessage",
  "granted": "NotificationManager-module__wxcMZa__granted",
  "notificationManager": "NotificationManager-module__wxcMZa__notificationManager",
  "permissionButton": "NotificationManager-module__wxcMZa__permissionButton",
  "permissionSection": "NotificationManager-module__wxcMZa__permissionSection",
  "permissionStatus": "NotificationManager-module__wxcMZa__permissionStatus",
  "settingItem": "NotificationManager-module__wxcMZa__settingItem",
  "settingLabel": "NotificationManager-module__wxcMZa__settingLabel",
  "settingsSection": "NotificationManager-module__wxcMZa__settingsSection",
  "slider": "NotificationManager-module__wxcMZa__slider",
  "statusLabel": "NotificationManager-module__wxcMZa__statusLabel",
  "statusValue": "NotificationManager-module__wxcMZa__statusValue",
  "switch": "NotificationManager-module__wxcMZa__switch",
  "testButton": "NotificationManager-module__wxcMZa__testButton",
  "thresholdControl": "NotificationManager-module__wxcMZa__thresholdControl",
  "thresholdLabel": "NotificationManager-module__wxcMZa__thresholdLabel",
  "thresholdSlider": "NotificationManager-module__wxcMZa__thresholdSlider",
  "thresholdValue": "NotificationManager-module__wxcMZa__thresholdValue",
  "title": "NotificationManager-module__wxcMZa__title",
});
}),
"[project]/components/NotificationManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/NotificationManager.module.css [app-ssr] (css module)");
;
;
;
function NotificationManager({ currentWeather, cityName }) {
    const [notificationsEnabled, setNotificationsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [permission, setPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('default');
    const [temperatureThreshold, setTemperatureThreshold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(30);
    const [rainNotifications, setRainNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ('Notification' in window) {
            setPermission(Notification.permission);
        }
    }, []);
    const requestNotificationPermission = async ()=>{
        if (!('Notification' in window)) {
            alert('Browser ini tidak mendukung notifikasi');
            return;
        }
        try {
            const result = await Notification.requestPermission();
            setPermission(result);
            if (result === 'granted') {
                setNotificationsEnabled(true);
                showWelcomeNotification();
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error);
        }
    };
    const showWelcomeNotification = ()=>{
        if (currentWeather && Notification.permission === 'granted') {
            const temp = Math.round(currentWeather.main.temp);
            const description = currentWeather.weather[0].description;
            new Notification('Weather PWA Aktif! 🌤️', {
                body: `Cuaca di ${cityName}: ${temp}°C, ${description}`,
                icon: '/icons/icon-192x192.png',
                badge: '/icons/icon-72x72.png',
                tag: 'weather-welcome'
            });
        }
    };
    const handleToggleNotifications = ()=>{
        if (permission === 'granted') {
            setNotificationsEnabled(!notificationsEnabled);
        } else {
            requestNotificationPermission();
        }
    };
    const sendTestNotification = ()=>{
        if (Notification.permission === 'granted') {
            new Notification('Test Notifikasi Weather PWA ✅', {
                body: 'Notifikasi berhasil diaktifkan! Anda akan menerima pembaruan cuaca.',
                icon: '/icons/icon-192x192.png'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationManager,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: "Pengaturan Notifikasi"
            }, void 0, false, {
                fileName: "[project]/components/NotificationManager.js",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].permissionSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].permissionStatus,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusLabel,
                                children: "Status Izin:"
                            }, void 0, false, {
                                fileName: "[project]/components/NotificationManager.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusValue} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][permission]}`,
                                children: permission === 'granted' ? 'Diberikan' : permission === 'denied' ? 'Ditolak' : 'Belum Diputuskan'
                            }, void 0, false, {
                                fileName: "[project]/components/NotificationManager.js",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NotificationManager.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    permission !== 'granted' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].permissionButton,
                        onClick: requestNotificationPermission,
                        children: "Minta Izin Notifikasi"
                    }, void 0, false, {
                        fileName: "[project]/components/NotificationManager.js",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/NotificationManager.js",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            permission === 'granted' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].settingsSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].settingItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].switch,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: notificationsEnabled,
                                        onChange: handleToggleNotifications
                                    }, void 0, false, {
                                        fileName: "[project]/components/NotificationManager.js",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slider
                                    }, void 0, false, {
                                        fileName: "[project]/components/NotificationManager.js",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NotificationManager.js",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].settingLabel,
                                children: "Aktifkan Notifikasi Cuaca"
                            }, void 0, false, {
                                fileName: "[project]/components/NotificationManager.js",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NotificationManager.js",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].settingItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].switch,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: rainNotifications,
                                        onChange: (e)=>setRainNotifications(e.target.checked),
                                        disabled: !notificationsEnabled
                                    }, void 0, false, {
                                        fileName: "[project]/components/NotificationManager.js",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slider
                                    }, void 0, false, {
                                        fileName: "[project]/components/NotificationManager.js",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NotificationManager.js",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].settingLabel,
                                children: "Notifikasi Hujan"
                            }, void 0, false, {
                                fileName: "[project]/components/NotificationManager.js",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NotificationManager.js",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].settingItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thresholdLabel,
                                children: "Notifikasi jika suhu di atas:"
                            }, void 0, false, {
                                fileName: "[project]/components/NotificationManager.js",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thresholdControl,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "25",
                                        max: "40",
                                        value: temperatureThreshold,
                                        onChange: (e)=>setTemperatureThreshold(parseInt(e.target.value)),
                                        disabled: !notificationsEnabled,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thresholdSlider
                                    }, void 0, false, {
                                        fileName: "[project]/components/NotificationManager.js",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thresholdValue,
                                        children: [
                                            temperatureThreshold,
                                            "°C"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/NotificationManager.js",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/NotificationManager.js",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NotificationManager.js",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testButton,
                        onClick: sendTestNotification,
                        disabled: !notificationsEnabled,
                        children: "Kirim Notifikasi Test"
                    }, void 0, false, {
                        fileName: "[project]/components/NotificationManager.js",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/NotificationManager.js",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            permission === 'denied' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deniedMessage,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Izin notifikasi ditolak. Untuk mengaktifkan, buka pengaturan browser Anda."
                }, void 0, false, {
                    fileName: "[project]/components/NotificationManager.js",
                    lineNumber: 150,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/NotificationManager.js",
                lineNumber: 149,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/NotificationManager.js",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/weatherAPI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentWeather",
    ()=>getCurrentWeather,
    "getForecast",
    ()=>getForecast,
    "getWeatherByCityName",
    ()=>getWeatherByCityName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/constants.js [app-ssr] (ecmascript)");
;
const getCurrentWeather = async (lat, lon)=>{
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER_API_URL"]}/weather?lat=${lat}&lon=${lon}&appid=${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER_API_KEY"]}&units=metric&lang=id`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching current weather:', error);
        throw error;
    }
};
const getForecast = async (lat, lon)=>{
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER_API_URL"]}/forecast?lat=${lat}&lon=${lon}&appid=${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER_API_KEY"]}&units=metric&lang=id&cnt=40`);
        if (!response.ok) {
            throw new Error('Failed to fetch forecast data');
        }
        const data = await response.json();
        return data.list;
    } catch (error) {
        console.error('Error fetching forecast:', error);
        throw error;
    }
};
const getWeatherByCityName = async (cityName)=>{
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER_API_URL"]}/weather?q=${cityName}&appid=${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEATHER_API_KEY"]}&units=metric&lang=id`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather by city name');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather by city:', error);
        throw error;
    }
};
}),
"[project]/app/page.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "contentWrapper": "page-module__E0kJGG__contentWrapper",
  "controlButtons": "page-module__E0kJGG__controlButtons",
  "controlsSection": "page-module__E0kJGG__controlsSection",
  "errorContainer": "page-module__E0kJGG__errorContainer",
  "fadeIn": "page-module__E0kJGG__fadeIn",
  "forecastSection": "page-module__E0kJGG__forecastSection",
  "installSection": "page-module__E0kJGG__installSection",
  "lastUpdate": "page-module__E0kJGG__lastUpdate",
  "loadingContainer": "page-module__E0kJGG__loadingContainer",
  "mainContent": "page-module__E0kJGG__mainContent",
  "networkStatus": "page-module__E0kJGG__networkStatus",
  "notificationSection": "page-module__E0kJGG__notificationSection",
  "offline": "page-module__E0kJGG__offline",
  "online": "page-module__E0kJGG__online",
  "pageContainer": "page-module__E0kJGG__pageContainer",
  "refreshButton": "page-module__E0kJGG__refreshButton",
  "sectionTitle": "page-module__E0kJGG__sectionTitle",
  "statusBar": "page-module__E0kJGG__statusBar",
  "unitToggle": "page-module__E0kJGG__unitToggle",
});
}),
"[project]/components/InstallButton.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "installButton": "InstallButton-module__Vpwkba__installButton",
  "installedStatus": "InstallButton-module__Vpwkba__installedStatus",
  "iosInstructions": "InstallButton-module__Vpwkba__iosInstructions",
  "shareIcon": "InstallButton-module__Vpwkba__shareIcon",
  "waiting": "InstallButton-module__Vpwkba__waiting",
});
}),
"[project]/components/InstallButton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InstallButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InstallButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/InstallButton.module.css [app-ssr] (css module)");
'use client';
;
;
;
function InstallButton() {
    const [deferredPrompt, setDeferredPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isInstallable, setIsInstallable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isIOS, setIsIOS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStandalone, setIsStandalone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Cek jika sudah diinstall
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsStandalone(true);
            return;
        }
        // Detect iOS
        const isIos = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
        setIsIOS(isIos);
        // Listen for install prompt
        window.addEventListener('beforeinstallprompt', (e)=>{
            e.preventDefault();
            setDeferredPrompt(e);
            setIsInstallable(true);
            console.log('✅ PWA install prompt available');
        });
        // Check if already installed
        window.addEventListener('appinstalled', ()=>{
            console.log('✅ PWA installed successfully');
            setIsInstallable(false);
            setIsStandalone(true);
        });
        return ()=>{
            window.removeEventListener('beforeinstallprompt', ()=>{});
            window.removeEventListener('appinstalled', ()=>{});
        };
    }, []);
    const handleInstallClick = async ()=>{
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response: ${outcome}`);
        setDeferredPrompt(null);
        setIsInstallable(false);
    };
    if (isStandalone) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InstallButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].installedStatus,
            children: "✅ Aplikasi sudah terinstall"
        }, void 0, false, {
            fileName: "[project]/components/InstallButton.js",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    }
    if (isIOS) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InstallButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iosInstructions,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    children: "📲 Install di iOS:"
                }, void 0, false, {
                    fileName: "[project]/components/InstallButton.js",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                "Tap ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InstallButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shareIcon,
                                    children: "⎋"
                                }, void 0, false, {
                                    fileName: "[project]/components/InstallButton.js",
                                    lineNumber: 69,
                                    columnNumber: 19
                                }, this),
                                " Share button"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/InstallButton.js",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: 'Scroll down → "Add to Home Screen"'
                        }, void 0, false, {
                            fileName: "[project]/components/InstallButton.js",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: 'Tap "Add"'
                        }, void 0, false, {
                            fileName: "[project]/components/InstallButton.js",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/InstallButton.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/InstallButton.js",
            lineNumber: 66,
            columnNumber: 7
        }, this);
    }
    if (!isInstallable) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InstallButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].waiting,
            children: "⏳ Tunggu beberapa detik untuk install..."
        }, void 0, false, {
            fileName: "[project]/components/InstallButton.js",
            lineNumber: 79,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InstallButton$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].installButton,
        onClick: handleInstallClick,
        children: "📲 INSTAL APLIKASI"
    }, void 0, false, {
        fileName: "[project]/components/InstallButton.js",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WeatherCard.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ForecastList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LocationSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NotificationManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$weatherAPI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/weatherAPI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/page.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InstallButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/InstallButton.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function Home() {
    const [currentWeather, setCurrentWeather] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forecast, setForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CITIES"][0]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [temperatureUnit, setTemperatureUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('celsius');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check online status
        setIsOnline(navigator.onLine);
        const handleOnline = ()=>setIsOnline(true);
        const handleOffline = ()=>setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        // Load cached weather data
        const cachedWeather = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CACHE_KEYS"].CURRENT_WEATHER);
        const cachedForecast = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CACHE_KEYS"].FORECAST);
        const cachedCity = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CACHE_KEYS"].LOCATION);
        if (cachedCity) {
            try {
                setSelectedCity(JSON.parse(cachedCity));
            } catch (e) {
                console.error('Error parsing cached city:', e);
            }
        }
        if (cachedWeather) {
            try {
                setCurrentWeather(JSON.parse(cachedWeather));
            } catch (e) {
                console.error('Error parsing cached weather:', e);
            }
        }
        if (cachedForecast) {
            try {
                setForecast(JSON.parse(cachedForecast));
            } catch (e) {
                console.error('Error parsing cached forecast:', e);
            }
        }
        fetchWeatherData();
        return ()=>{
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchWeatherData();
    }, [
        selectedCity
    ]);
    const fetchWeatherData = async ()=>{
        if (!isOnline) {
            console.log('Offline mode - using cached data');
            return;
        }
        setLoading(true);
        try {
            const [weatherData, forecastData] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$weatherAPI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentWeather"])(selectedCity.lat, selectedCity.lon),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$weatherAPI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getForecast"])(selectedCity.lat, selectedCity.lon)
            ]);
            setCurrentWeather(weatherData);
            setForecast(forecastData);
            // Cache data
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CACHE_KEYS"].CURRENT_WEATHER, JSON.stringify(weatherData));
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CACHE_KEYS"].FORECAST, JSON.stringify(forecastData));
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CACHE_KEYS"].LOCATION, JSON.stringify(selectedCity));
        } catch (error) {
            console.error('Error fetching weather data:', error);
            // Use cached data if available
            if (!currentWeather) {
                const cached = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CACHE_KEYS"].CURRENT_WEATHER);
                if (cached) setCurrentWeather(JSON.parse(cached));
            }
        } finally{
            setLoading(false);
        }
    };
    const handleCityChange = (city)=>{
        setSelectedCity(city);
    };
    const toggleTemperatureUnit = ()=>{
        setTemperatureUnit((prev)=>prev === 'celsius' ? 'fahrenheit' : 'celsius');
    };
    const convertTemperature = (temp)=>{
        if (temperatureUnit === 'fahrenheit') {
            return Math.round(temp * 9 / 5 + 32);
        }
        return Math.round(temp);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].networkStatus} ${isOnline ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].online : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offline}`,
                        children: isOnline ? '● Online' : '● Offline'
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lastUpdate,
                        children: currentWeather && `Update: ${new Date(currentWeather.dt * 1000).toLocaleTimeString('id-ID')}`
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlsSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LocationSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                cities: __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CITIES"],
                                selectedCity: selectedCity,
                                onCityChange: handleCityChange,
                                loading: loading
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].installSection,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$InstallButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 140,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButtons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].refreshButton,
                                        onClick: fetchWeatherData,
                                        disabled: loading || !isOnline,
                                        children: loading ? 'Memuat...' : '⟳ Refresh'
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].unitToggle,
                                        onClick: toggleTemperatureUnit,
                                        children: [
                                            "°",
                                            temperatureUnit === 'celsius' ? 'C' : 'F'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainContent,
                        children: loading && !currentWeather ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "loading"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Memuat data cuaca..."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this) : currentWeather ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WeatherCard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    weather: currentWeather,
                                    cityName: selectedCity.name,
                                    temperatureUnit: temperatureUnit,
                                    convertTemperature: convertTemperature
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].forecastSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                            children: "Prakiraan 5 Hari ke Depan"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForecastList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            forecast: forecast,
                                            temperatureUnit: temperatureUnit,
                                            convertTemperature: convertTemperature
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Gagal memuat data cuaca"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Pastikan koneksi internet Anda aktif atau coba lagi nanti."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].notificationSection,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NotificationManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            currentWeather: currentWeather,
                            cityName: selectedCity.name
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8c402e83._.js.map