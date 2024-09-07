import SearchIcon from '@mui/icons-material/Search';
import { Box, ImageList, ImageListItem, Tab, Tabs } from "@mui/material";
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BoxSearchMui, GifMui, IconSearchMui, InputSearchMui } from "../../style-mui";
import { MessageActions } from '../../../../../../redux/advise';

export default function Icon() {
    const icons = [
        {
            name: 'Smile face & human figure',
            src: '/Images/home/advise/emoji/open_emoji.png',
            icon: [
                "😂",
                "😮",
                "😍",
                "😢",
                "👏",
                "🔥",
                "🎉",
                "💯",
                "❤️",
                "🤣",
                "🥰",
                "😘",
                "😭",
                "😊",
                "😀",
                "😃",
                "😄",
                "😁",
                "😆",
                "😅",
                "🤣",
                "😂",
                "🙂",
                "🙃",
                "😉",
                "😊",
                "😇",
                "🥰",
                "😍",
                "🤩",
                "😘",
                "😗",
                "☺",
                "😚",
                "😙",
                "😋",
                "😛",
                "😜",
                "🤪",
                "😝",
                "🤑",
                "🤗",
                "🤭",
                "🤫",
                "🤔",
                "🤐",
                "🤨",
                "😐",
                "😑",
                "😶",
                "😏",
                "😒",
                "🙄",
                "😬",
                "🤥",
                "😌",
                "😔",
                "😪",
                "🤤",
                "😴",
                "😷",
                "🤒",
                "🤕",
                "🤢",
                "🤮",
                "🤧",
                "🥵",
                "🥶",
                "🥴",
                "😵",
                "🤯",
                "🤠",
                "🥳",
                "😎",
                "🤓",
                "🧐",
                "😕",
                "😟",
                "🙁",
                "☹",
                "😮",
                "😯",
                "😲",
                "😳",
                "🥺",
                "😦",
                "😧",
                "😨",
                "😰",
                "😥",
                "😢",
                "😭",
                "😱",
                "😖",
                "😣",
                "😞",
                "😓",
                "😩",
                "😫",
                "😤",
                "😡",
                "😠",
                "🤬",
                "😈",
                "👿",
                "💀",
                "☠",
                "💩",
                "🤡",
                "👹",
                "👺",
                "👻",
                "👽",
                "👾",
                "🤖",
                "😺",
                "😸",
                "😹",
                "😻",
                "😼",
                "😽",
                "🙀",
                "😿",
                "😾",
                "💋",
                "👋",
                "🤚",
                "🖐",
                "✋",
                "🖖",
                "👌",
                "✌",
                "🤞",
                "🤟",
                "🤘",
                "🤙",
                "👈",
                "👉",
                "👆",
                "🖕",
                "👇",
                "☝",
                "👍",
                "👎",
                "✊",
                "👊",
                "🤛",
                "🤜",
                "👏",
                "🙌",
                "👐",
                "🤲",
                "🤝",
                "🙏",
                "✍",
                "💅",
                "🤳",
                "💪",
                "🦵",
                "🦶",
                "👂",
                "👃",
                "🧠",
                "🦷",
                "🦴",
                "👀",
                "👁",
                "👅",
                "👄",
                "👶",
                "🧒",
                "👦",
                "👧",
                "🧑",
                "👱",
                "👨",
                "🧔",
                "👨‍🦰",
                "👨‍🦱",
                "👨‍🦳",
                "👨‍🦲",
                "👩",
                "👩‍🦰",
                "👩‍🦱",
                "👩‍🦳",
                "👩‍🦲",
                "👱‍♀️",
                "👱‍♂️",
                "🧓",
                "👴",
                "👵",
                "🙍",
                "🙍‍♂️",
                "🙍‍♀️",
                "🙎",
                "🙎‍♂️",
                "🙎‍♀️",
                "🙅",
                "🙅‍♂️",
                "🙅‍♀️",
                "🙆",
                "🙆‍♂️",
                "🙆‍♀️",
                "💁",
                "💁‍♂️",
                "💁‍♀️",
                "🙋",
                "🙋‍♂️",
                "🙋‍♀️",
                "🙇",
                "🙇‍♂️",
                "🙇‍♀️",
                "🤦",
                "🤦‍♂️",
                "🤦‍♀️",
                "🤷",
                "🤷‍♂️",
                "🤷‍♀️",
                "👨‍⚕️",
                "👩‍⚕️",
                "👨‍🎓",
                "👩‍🎓",
                "👨‍🏫",
                "👩‍🏫",
                "👨‍⚖️",
                "👩‍⚖️",
                "👨‍🌾",
                "👩‍🌾",
                "👨‍🍳",
                "👩‍🍳",
                "👨‍🔧",
                "👩‍🔧",
                "👨‍🏭",
                "👩‍🏭",
                "👨‍💼",
                "👩‍💼",
                "👨‍🔬",
                "👩‍🔬",
                "👨‍💻",
                "👩‍💻",
                "👨‍🎤",
                "👩‍🎤",
                "👨‍🎨",
                "👩‍🎨",
                "👨‍✈️",
                "👩‍✈️",
                "👨‍🚀",
                "👩‍🚀",
                "👨‍🚒",
                "👩‍🚒",
                "👮",
                "👮‍♂️",
                "👮‍♀️",
                "🕵",
                "🕵️‍♂️",
                "🕵️‍♀️",
                "💂",
                "💂‍♂️",
                "💂‍♀️",
                "👷",
                "👷‍♂️",
                "👷‍♀️",
                "🤴",
                "👸",
                "👳",
                "👳‍♂️",
                "👳‍♀️",
                "👲",
                "🧕",
                "🤵",
                "👰",
                "🤰",
                "🤱",
                "👼",
                "🎅",
                "🤶",
                "🦸",
                "🦸‍♂️",
                "🦸‍♀️",
                "🦹",
                "🦹‍♂️",
                "🦹‍♀️",
                "🧙",
                "🧙‍♂️",
                "🧙‍♀️",
                "🧚",
                "🧚‍♂️",
                "🧚‍♀️",
                "🧛",
                "🧛‍♂️",
                "🧛‍♀️",
                "🧜",
                "🧜‍♂️",
                "🧜‍♀️",
                "🧝",
                "🧝‍♂️",
                "🧝‍♀️",
                "🧞",
                "🧞‍♂️",
                "🧞‍♀️",
                "🧟",
                "🧟‍♂️",
                "🧟‍♀️",
                "💆",
                "💆‍♂️",
                "💆‍♀️",
                "💇",
                "💇‍♂️",
                "💇‍♀️",
                "🚶",
                "🚶‍♂️",
                "🚶‍♀️",
                "🏃",
                "🏃‍♂️",
                "🏃‍♀️",
                "💃",
                "🕺",
                "🕴",
                "👯",
                "👯‍♂️",
                "👯‍♀️",
                "🧖",
                "🧖‍♂️",
                "🧖‍♀️",
                "🧘",
                "👭",
                "👫",
                "👬",
                "💏",
                "👨‍❤️‍💋‍👨",
                "👩‍❤️‍💋‍👩",
                "💑",
                "👨‍❤️‍👨",
                "👩‍❤️‍👩",
                "👪",
                "👨‍👩‍👦",
                "👨‍👩‍👧",
                "👨‍👩‍👧‍👦",
                "👨‍👩‍👦‍👦",
                "👨‍👩‍👧‍👧",
                "👨‍👨‍👦",
                "👨‍👨‍👧",
                "👨‍👨‍👧‍👦",
                "👨‍👨‍👦‍👦",
                "👨‍👨‍👧‍👧",
                "👩‍👩‍👦",
                "👩‍👩‍👧",
                "👩‍👩‍👧‍👦",
                "👩‍👩‍👦‍👦",
                "👩‍👩‍👧‍👧",
                "👨‍👦",
                "👨‍👦‍👦",
                "👨‍👧",
                "👨‍👧‍👦",
                "👨‍👧‍👧",
                "👩‍👦",
                "👩‍👦‍👦",
                "👩‍👧",
                "👩‍👧‍👦",
                "👩‍👧‍👧",
                "🗣",
                "👤",
                "👥",
                "👣",
                "🧳",
                "🌂",
                "☂",
                "🧵",
                "🧶",
                "👓",
                "🕶",
                "🥽",
                "🥼",
                "👔",
                "👕",
                "👖",
                "🧣",
                "🧤",
                "🧥",
                "🧦",
                "👗",
                "👘",
                "👙",
                "👚",
                "👛",
                "👜",
                "👝",
                "🎒",
                "👞",
                "👟",
                "🥾",
                "🥿",
                "👠",
                "👡",
                "👢",
                "👑",
                "👒",
                "🎩",
                "🎓",
                "🧢",
                "⛑",
                "💄",
                "💍",
                "💼",
            ]
        },
        {
            name: 'Animals & Nature',
            src: 'https://cdn-icons-png.flaticon.com/128/672/672716.png',
            icon: [
                "🙈",
                "🙉",
                "🙊",
                "💥",
                "💫",
                "💦",
                "💨",
                "🐵",
                "🐒",
                "🦍",
                "🐶",
                "🐕",
                "🐩",
                "🐺",
                "🦊",
                "🦝",
                "🐱",
                "🐈",
                "🦁",
                "🐯",
                "🐅",
                "🐆",
                "🐴",
                "🐎",
                "🦄",
                "🦓",
                "🦌",
                "🐮",
                "🐂",
                "🐃",
                "🐄",
                "🐷",
                "🐖",
                "🐗",
                "🐽",
                "🐏",
                "🐑",
                "🐐",
                "🐪",
                "🐫",
                "🦙",
                "🦒",
                "🐘",
                "🦏",
                "🦛",
                "🐭",
                "🐁",
                "🐀",
                "🐹",
                "🐰",
                "🐇",
                "🐿",
                "🦔",
                "🦇",
                "🐻",
                "🐨",
                "🐼",
                "🦘",
                "🦡",
                "🐾",
                "🦃",
                "🐔",
                "🐓",
                "🐣",
                "🐤",
                "🐥",
                "🐦",
                "🐧",
                "🕊",
                "🦅",
                "🦆",
                "🦢",
                "🦉",
                "🦚",
                "🦜",
                "🐸",
                "🐊",
                "🐢",
                "🦎",
                "🐍",
                "🐲",
                "🐉",
                "🦕",
                "🦖",
                "🐳",
                "🐋",
                "🐬",
                "🐟",
                "🐠",
                "🐡",
                "🦈",
                "🐙",
                "🐚",
                "🐌",
                "🦋",
                "🐛",
                "🐜",
                "🐝",
                "🐞",
                "🦗",
                "🕷",
                "🕸",
                "🦂",
                "🦟",
                "🦠",
                "💐",
                "🌸",
                "💮",
                "🏵",
                "🌹",
                "🥀",
                "🌺",
                "🌻",
                "🌼",
                "🌷",
                "🌱",
                "🌲",
                "🌳",
                "🌴",
                "🌵",
                "🌾",
                "🌿",
                "☘",
                "🍀",
                "🍁",
                "🍂",
                "🍃",
                "🍄",
                "🌰",
                "🦀",
                "🦞",
                "🦐",
                "🦑",
                "🌍",
                "🌎",
                "🌏",
                "🌐",
                "🌑",
                "🌒",
                "🌓",
                "🌔",
                "🌕",
                "🌖",
                "🌗",
                "🌘",
                "🌙",
                "🌚",
                "🌛",
                "🌜",
                "☀",
                "🌝",
                "🌞",
                "⭐",
                "🌟",
                "🌠",
                "☁",
                "⛅",
                "⛈",
                "🌤",
                "🌥",
                "🌦",
                "🌧",
                "🌨",
                "🌩",
                "🌪",
                "🌫",
                "🌬",
                "🌈",
                "☂",
                "☔",
                "⚡",
                "❄",
                "☃",
                "⛄",
                "☄",
                "🔥",
                "💧",
                "🌊",
                "🎄",
                "✨",
                "🎋",
                "🎍",
            ]
        },
        {
            name: 'Food & Drink',
            src: 'https://cdn-icons-png.flaticon.com/128/857/857681.png',
            icon: [
                "🍇",
                "🍈",
                "🍉",
                "🍊",
                "🍋",
                "🍌",
                "🍍",
                "🥭",
                "🍎",
                "🍏",
                "🍐",
                "🍑",
                "🍒",
                "🍓",
                "🥝",
                "🍅",
                "🥥",
                "🥑",
                "🍆",
                "🥔",
                "🥕",
                "🌽",
                "🌶",
                "🥒",
                "🥬",
                "🥦",
                "🍄",
                "🥜",
                "🌰",
                "🍞",
                "🥐",
                "🥖",
                "🥨",
                "🥯",
                "🥞",
                "🧀",
                "🍖",
                "🍗",
                "🥩",
                "🥓",
                "🍔",
                "🍟",
                "🍕",
                "🌭",
                "🥪",
                "🌮",
                "🌯",
                "🥙",
                "🍳",
                "🥘",
                "🍲",
                "🥣",
                "🥗",
                "🍿",
                "🧂",
                "🥫",
                "🍱",
                "🍘",
                "🍙",
                "🍚",
                "🍛",
                "🍜",
                "🍝",
                "🍠",
                "🍢",
                "🍣",
                "🍤",
                "🍥",
                "🥮",
                "🍡",
                "🥟",
                "🥠",
                "🥡",
                "🍦",
                "🍧",
                "🍨",
                "🍩",
                "🍪",
                "🎂",
                "🍰",
                "🧁",
                "🥧",
                "🍫",
                "🍬",
                "🍭",
                "🍮",
                "🍯",
                "🍼",
                "🥛",
                "☕",
                "🍵",
                "🍶",
                "🍾",
                "🍷",
                "🍸",
                "🍹",
                "🍺",
                "🍻",
                "🥂",
                "🥃",
                "🥤",
                "🥢",
                "🍽",
                "🍴",
                "🥄",
            ]
        },
        {
            name: 'Activities',
            src: 'https://cdn-icons-png.flaticon.com/128/2110/2110599.png',
            icon: [
                "🕴",
                "🧗",
                "🧗‍♂️",
                "🧗‍♀️",
                "🏇",
                "⛷",
                "🏂",
                "🏌",
                "🏌️‍♂️",
                "🏌️‍♀️",
                "🏄",
                "🏄‍♂️",
                "🏄‍♀️",
                "🚣",
                "🚣‍♂️",
                "🚣‍♀️",
                "🏊",
                "🏊‍♂️",
                "🏊‍♀️",
                "⛹",
                "⛹️‍♂️",
                "⛹️‍♀️",
                "🏋",
                "🏋️‍♂️",
                "🏋️‍♀️",
                "🚴",
                "🚴‍♂️",
                "🚴‍♀️",
                "🚵",
                "🚵‍♂️",
                "🚵‍♀️",
                "🤸",
                "🤸‍♂️",
                "🤸‍♀️",
                "🤼",
                "🤼‍♂️",
                "🤼‍♀️",
                "🤽",
                "🤽‍♂️",
                "🤽‍♀️",
                "🤾",
                "🤾‍♂️",
                "🤾‍♀️",
                "🤹",
                "🤹‍♂️",
                "🤹‍♀️",
                "🧘",
                "🧘‍♂️",
                "🧘‍♀️",
                "🎪",
                "🛹",
                "🎗",
                "🎟",
                "🎫",
                "🎖",
                "🏆",
                "🏅",
                "🥇",
                "🥈",
                "🥉",
                "⚽",
                "⚾",
                "🥎",
                "🏀",
                "🏐",
                "🏈",
                "🏉",
                "🎾",
                "🥏",
                "🎳",
                "🏏",
                "🏑",
                "🏒",
                "🥍",
                "🏓",
                "🏸",
                "🥊",
                "🥋",
                "⛳",
                "⛸",
                "🎣",
                "🎽",
                "🎿",
                "🛷",
                "🥌",
                "🎯",
                "🎱",
                "🎮",
                "🎰",
                "🎲",
                "🧩",
                "♟",
                "🎭",
                "🎨",
                "🧵",
                "🧶",
                "🎼",
                "🎤",
                "🎧",
                "🎷",
                "🎸",
                "🎹",
                "🎺",
                "🎻",
                "🥁",
                "🎬",
                "🏹",
            ]
        },
        {
            name: 'Travel & Places',
            src: 'https://cdn-icons-png.flaticon.com/128/5333/5333434.png',
            icon: [
                "🚣",
                "🗾",
                "🏔",
                "⛰",
                "🌋",
                "🗻",
                "🏕",
                "🏖",
                "🏜",
                "🏝",
                "🏞",
                "🏟",
                "🏛",
                "🏗",
                "🏘",
                "🏚",
                "🏠",
                "🏡",
                "🏢",
                "🏣",
                "🏤",
                "🏥",
                "🏦",
                "🏨",
                "🏩",
                "🏪",
                "🏫",
                "🏬",
                "🏭",
                "🏯",
                "🏰",
                "💒",
                "🗼",
                "🗽",
                "⛪",
                "🕌",
                "🕍",
                "⛩",
                "🕋",
                "⛲",
                "⛺",
                "🌁",
                "🌃",
                "🏙",
                "🌄",
                "🌅",
                "🌆",
                "🌇",
                "🌉",
                "🎠",
                "🎡",
                "🎢",
                "🚂",
                "🚃",
                "🚄",
                "🚅",
                "🚆",
                "🚇",
                "🚈",
                "🚉",
                "🚊",
                "🚝",
                "🚞",
                "🚋",
                "🚌",
                "🚍",
                "🚎",
                "🚐",
                "🚑",
                "🚒",
                "🚓",
                "🚔",
                "🚕",
                "🚖",
                "🚗",
                "🚘",
                "🚚",
                "🚛",
                "🚜",
                "🏎",
                "🏍",
                "🛵",
                "🚲",
                "🛴",
                "🚏",
                "🛤",
                "⛽",
                "🚨",
                "🚥",
                "🚦",
                "🚧",
                "⚓",
                "⛵",
                "🚤",
                "🛳",
                "⛴",
                "🛥",
                "🚢",
                "✈",
                "🛩",
                "🛫",
                "🛬",
                "💺",
                "🚁",
                "🚟",
                "🚠",
                "🚡",
                "🛰",
                "🚀",
                "🛸",
                "🌠",
                "🌌",
                "⛱",
                "🎆",
                "🎇",
                "🎑",
                "💴",
                "💵",
                "💶",
                "💷",
                "🗿",
                "🛂",
                "🛃",
                "🛄",
                "🛅",
            ]
        },
        {
            name: 'Objects',
            src: 'https://cdn-icons-png.flaticon.com/128/11365/11365703.png',
            icon: [
                "💌",
                "🕳",
                "💣",
                "🛀",
                "🛌",
                "🔪",
                "🏺",
                "🗺",
                "🧭",
                "🧱",
                "💈",
                "🛢",
                "🛎",
                "🧳",
                "⌛",
                "⏳",
                "⌚",
                "⏰",
                "⏱",
                "⏲",
                "🕰",
                "🌡",
                "⛱",
                "🧨",
                "🎈",
                "🎉",
                "🎊",
                "🎎",
                "🎏",
                "🎐",
                "🧧",
                "🎀",
                "🎁",
                "🔮",
                "🧿",
                "🕹",
                "🧸",
                "🖼",
                "🧵",
                "🧶",
                "🛍",
                "📿",
                "💎",
                "📯",
                "🎙",
                "🎚",
                "🎛",
                "📻",
                "📱",
                "📲",
                "☎",
                "📞",
                "📟",
                "📠",
                "🔋",
                "🔌",
                "💻",
                "🖥",
                "🖨",
                "⌨",
                "🖱",
                "🖲",
                "💽",
                "💾",
                "💿",
                "📀",
                "🧮",
                "🎥",
                "🎞",
                "📽",
                "📺",
                "📷",
                "📸",
                "📹",
                "📼",
                "🔍",
                "🔎",
                "🕯",
                "💡",
                "🔦",
                "🏮",
                "📔",
                "📕",
                "📖",
                "📗",
                "📘",
                "📙",
                "📚",
                "📓",
                "📃",
                "📜",
                "📄",
                "📰",
                "🗞",
                "📑",
                "🔖",
                "🏷",
                "💰",
                "💴",
                "💵",
                "💶",
                "💷",
                "💸",
                "💳",
                "🧾",
                "✉",
                "📧",
                "📨",
                "📩",
                "📤",
                "📥",
                "📦",
                "📫",
                "📪",
                "📬",
                "📭",
                "📮",
                "🗳",
                "✏",
                "✒",
                "🖋",
                "🖊",
                "🖌",
                "🖍",
                "📝",
                "📁",
                "📂",
                "🗂",
                "📅",
                "📆",
                "🗒",
                "🗓",
                "📇",
                "📈",
                "📉",
                "📊",
                "📋",
                "📌",
                "📍",
                "📎",
                "🖇",
                "📏",
                "📐",
                "✂",
                "🗃",
                "🗄",
                "🗑",
                "🔒",
                "🔓",
                "🔏",
                "🔐",
                "🔑",
                "🗝",
                "🔨",
                "⛏",
                "⚒",
                "🛠",
                "🗡",
                "⚔",
                "🔫",
                "🛡",
                "🔧",
                "🔩",
                "⚙",
                "🗜",
                "⚖",
                "🔗",
                "⛓",
                "🧰",
                "🧲",
                "⚗",
                "🧪",
                "🧫",
                "🧬",
                "🔬",
                "🔭",
                "📡",
                "💉",
                "💊",
                "🚪",
                "🛏",
                "🛋",
                "🚽",
                "🚿",
                "🛁",
                "🧴",
                "🧷",
                "🧹",
                "🧺",
                "🧻",
                "🧼",
                "🧽",
                "🧯",
                "🚬",
                "⚰",
                "⚱",
                "🗿",
                "🚰",
            ]
        },
        {
            name: 'Symbols',
            src: 'https://cdn-icons-png.flaticon.com/128/6010/6010242.png',
            icon: [
                "💘",
                "💝",
                "💖",
                "💗",
                "💓",
                "💞",
                "💕",
                "💟",
                "❣",
                "💔",
                "❤",
                "🧡",
                "💛",
                "💚",
                "💙",
                "💜",
                "🖤",
                "💯",
                "💢",
                "💬",
                "👁️‍🗨️",
                "🗯",
                "💭",
                "💤",
                "💮",
                "♨",
                "💈",
                "🛑",
                "🕛",
                "🕧",
                "🕐",
                "🕜",
                "🕑",
                "🕝",
                "🕒",
                "🕞",
                "🕓",
                "🕟",
                "🕔",
                "🕠",
                "🕕",
                "🕡",
                "🕖",
                "🕢",
                "🕗",
                "🕣",
                "🕘",
                "🕤",
                "🕙",
                "🕥",
                "🕚",
                "🕦",
                "🌀",
                "♠",
                "♥",
                "♦",
                "♣",
                "🃏",
                "🀄",
                "🎴",
                "🔇",
                "🔈",
                "🔉",
                "🔊",
                "📢",
                "📣",
                "📯",
                "🔔",
                "🔕",
                "🎵",
                "🎶",
                "🏧",
                "🚮",
                "🚰",
                "♿",
                "🚹",
                "🚺",
                "🚻",
                "🚼",
                "🚾",
                "⚠",
                "🚸",
                "⛔",
                "🚫",
                "🚳",
                "🚭",
                "🚯",
                "🚱",
                "🚷",
                "🔞",
                "☢",
                "☣",
                "⬆",
                "↗",
                "➡",
                "↘",
                "⬇",
                "↙",
                "⬅",
                "↖",
                "↕",
                "↔",
                "↩",
                "↪",
                "⤴",
                "⤵",
                "🔃",
                "🔄",
                "🔙",
                "🔚",
                "🔛",
                "🔜",
                "🔝",
                "🛐",
                "⚛",
                "🕉",
                "✡",
                "☸",
                "☯",
                "✝",
                "☦",
                "☪",
                "☮",
                "🕎",
                "🔯",
                "♈",
                "♉",
                "♊",
                "♋",
                "♌",
                "♍",
                "♎",
                "♏",
                "♐",
                "♑",
                "♒",
                "♓",
                "⛎",
                "🔀",
                "🔁",
                "🔂",
                "▶",
                "⏩",
                "◀",
                "⏪",
                "🔼",
                "⏫",
                "🔽",
                "⏬",
                "⏹",
                "⏏",
                "🎦",
                "🔅",
                "🔆",
                "📶",
                "📳",
                "📴",
                "✖",
                "➕",
                "➖",
                "➗",
                "♾",
                "‼",
                "⁉",
                "❓",
                "❔",
                "❕",
                "❗",
                "♻",
                "🔱",
                "📛",
                "🔰",
                "⭕",
                "✅",
                "☑",
                "✔",
                "❌",
                "❎",
                "➰",
                "➿",
                "〽",
                "✳",
                "✴",
                "❇",
                "©",
                "®",
                "™",
                "#️⃣",
                "0️⃣",
                "1️⃣",
                "2️⃣",
                "3️⃣",
                "4️⃣",
                "5️⃣",
                "6️⃣",
                "7️⃣",
                "8️⃣",
                "9️⃣",
                "🔟",
                "🔠",
                "🔡",
                "🔢",
                "🔣",
                "🔤",
                "🅰",
                "🆎",
                "🅱",
                "🆑",
                "🆒",
                "🆓",
                "ℹ",
                "🆔",
                "Ⓜ",
                "🆕",
                "🆖",
                "🅾",
                "🆗",
                "🅿",
                "🆘",
                "🆙",
                "🆚",
                "🈁",
                "🈂",
                "🈷",
                "🈶",
                "🈯",
                "🉐",
                "🈹",
                "🈚",
                "🈲",
                "🉑",
                "🈸",
                "🈴",
                "🈳",
                "㊗",
                "㊙",
                "🈺",
                "🈵",
                "🔴",
                "🔵",
                "⚫",
                "⚪",
                "⬛",
                "⬜",
                "◼",
                "◻",
                "◾",
                "◽",
                "▪",
                "▫",
                "🔶",
                "🔷",
                "🔸",
                "🔹",
                "🔺",
                "🔻",
                "💠",
                "🔳",
                "🔲"
            ]
        },
    ]

    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const mode = useSelector((state: any) => state.message.function);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const iconlistElements = document.querySelectorAll('.iconlist');
        if (iconlistElements[value]) {
            const element = iconlistElements[value] as HTMLDivElement;
            if (containerRef.current && element) {
                const positionToScroll = element.offsetTop - containerRef.current.offsetTop;
                containerRef.current.scrollTo({
                    top: positionToScroll,
                    behavior: 'smooth',
                });
            }
        }
    }, [value]);
    return (
        <GifMui className='box-emoji'>
            <BoxSearchMui className='box-search-icon'
            >
                <IconSearchMui />
                <InputSearchMui placeholder="Search for stickers..." />
            </BoxSearchMui>

            <Box ref={containerRef}
                sx={{
                    maxHeight: '300px',
                    overflowY: 'auto',
                }}
            >
                {
                    icons.map((iconlist, index) => (
                        <Box className="iconlist" key={iconlist.name}>
                            <p style={{
                                fontSize: '13px',
                                padding: '2px 7px',
                                color: '#3e3d3d',
                            }}>{iconlist.name}</p>
                            <ImageList sx={{ width: '100%' }} cols={7} rowHeight={30}>
                                {iconlist.icon.map((icon, index) => (
                                    <ImageListItem key={index} className="gif-detail" sx={{ textAlign: 'center' }}
                                        onClick={() => {
                                            mode === "GetIcon" ? dispatch(MessageActions.SetIcon(icon)) : dispatch(MessageActions.SetEmoji(icon))
                                        }}
                                    >
                                        <p style={{ fontSize: '25px' }}>{icon}</p>
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                    ))
                }
            </Box>

            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={{
                    'button': {
                        minWidth: 'auto'
                    }
                }}
            >
                {
                    icons.map((icon) => (
                        <Tab icon={<img alt="#" src={icon.src} style={{ width: '20px' }} />} aria-label={icon.name} key={icon.name} />
                    ))
                }
            </Tabs>
        </GifMui >
    );
}