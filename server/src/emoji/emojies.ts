
getAllEmojies()
let allEmojis = [
    "😀",
    "😁",
    "😂",
    "😃",
    "😄",
    "😅",
    "😆",
    "😇",
    "😈",
    "👿",
    "😉",
    "😊",
    "☺️",
    "😋",
    "😌",
    "😍",
    "😎",
    "😏",
    "😐",
    "😑",
    "😒",
    "😓",
    "😔",
    "😕",
    "😖",
    "😗",
    "😘",
    "😙",
    "😚",
    "😛",
    "😜",
    "😝",
    "😞",
    "😟",
    "😠",
    "😡",
    "😢",
    "😣",
    "😤",
    "😥",
    "😦",
    "😧",
    "😨",
    "😩",
    "😪",
    "😫",
    "😬",
    "😭",
    "😮",
    "😯",
    "😰",
    "😱",
    "😲",
    "😳",
    "😴",
    "😵",
    "😶",
    "😷",
    "😸",
    "😹",
    "😺",
    "😻",
    "😼",
    "😽",
    "😾",
    "😿",
    "🙀",
    "👣",
    "👤",
    "👥",
    "👶",
    "👶🏻",
    "👶🏼",
    "👶🏽",
    "👶🏾",
    "👶🏿",
    "👦",
    "👦🏻",
    "👦🏼",
    "👦🏽",
    "👦🏾",
    "👦🏿",
    "👧",
    "👧🏻",
    "👧🏼",
    "👧🏽",
    "👧🏾",
    "👧🏿",
    "👨",
    "👨🏻",
    "👨🏼",
    "👨🏽",
    "👨🏾",
    "👨🏿",
    "👩",
    "👩🏻",
    "👩🏼",
    "👩🏽",
    "👩🏾",
    "👩🏿",
    "👪",
    "👨‍👩‍👧",
    "👨‍👩‍👧‍👦",
    "👨‍👩‍👦‍👦",
    "👨‍👩‍👧‍👧",
    "👩‍👩‍👦",
    "👩‍👩‍👧",
    "👩‍👩‍👧‍👦",
    "👩‍👩‍👦‍👦",
    "👩‍👩‍👧‍👧",
    "👨‍👨‍👦",
    "👨‍👨‍👧",
    "👨‍👨‍👧‍👦",
    "👨‍👨‍👦‍👦",
    "👨‍👨‍👧‍👧",
    "👫",
    "👬",
    "👭",
    "👯",
    "👰",
    "👰🏻",
    "👰🏼",
    "👰🏽",
    "👰🏾",
    "👰🏿",
    "👱",
    "👱🏻",
    "👱🏼",
    "👱🏽",
    "👱🏾",
    "👱🏿",
    "👲",
    "👲🏻",
    "👲🏼",
    "👲🏽",
    "👲🏾",
    "👲🏿",
    "👳",
    "👳🏻",
    "👳🏼",
    "👳🏽",
    "👳🏾",
    "👳🏿",
    "👴",
    "👴🏻",
    "👴🏼",
    "👴🏽",
    "👴🏾",
    "👴🏿",
    "👵",
    "👵🏻",
    "👵🏼",
    "👵🏽",
    "👵🏾",
    "👵🏿",
    "👮",
    "👮🏻",
    "👮🏼",
    "👮🏽",
    "👮🏾",
    "👮🏿",
    "👷",
    "👷🏻",
    "👷🏼",
    "👷🏽",
    "👷🏾",
    "👷🏿",
    "👸",
    "👸🏻",
    "👸🏼",
    "👸🏽",
    "👸🏾",
    "👸🏿",
    "💂",
    "💂🏻",
    "💂🏼",
    "💂🏽",
    "💂🏾",
    "💂🏿",
    "👼",
    "👼🏻",
    "👼🏼",
    "👼🏽",
    "👼🏾",
    "👼🏿",
    "🎅",
    "🎅🏻",
    "🎅🏼",
    "🎅🏽",
    "🎅🏾",
    "🎅🏿",
    "👻",
    "👹",
    "👺",
    "💩",
    "💀",
    "👽",
    "👾",
    "🙇",
    "🙇🏻",
    "🙇🏼",
    "🙇🏽",
    "🙇🏾",
    "🙇🏿",
    "💁",
    "💁🏻",
    "💁🏼",
    "💁🏽",
    "💁🏾",
    "💁🏿",
    "🙅",
    "🙅🏻",
    "🙅🏼",
    "🙅🏽",
    "🙅🏾",
    "🙅🏿",
    "🙆",
    "🙆🏻",
    "🙆🏼",
    "🙆🏽",
    "🙆🏾",
    "🙆🏿",
    "🙋",
    "🙋🏻",
    "🙋🏼",
    "🙋🏽",
    "🙋🏾",
    "🙋🏿",
    "🙎",
    "🙎🏻",
    "🙎🏼",
    "🙎🏽",
    "🙎🏾",
    "🙎🏿",
    "🙍",
    "🙍🏻",
    "🙍🏼",
    "🙍🏽",
    "🙍🏾",
    "🙍🏿",
    "💆",
    "💆🏻",
    "💆🏼",
    "💆🏽",
    "💆🏾",
    "💆🏿",
    "💇",
    "💇🏻",
    "💇🏼",
    "💇🏽",
    "💇🏾",
    "💇🏿",
    "💑",
    "👩‍❤️‍👩",
    "👨‍❤️‍👨",
    "💏",
    "👩‍❤️‍💋‍👩",
    "👨‍❤️‍💋‍👨",
    "🙌",
    "🙌🏻",
    "🙌🏼",
    "🙌🏽",
    "🙌🏾",
    "🙌🏿",
    "👏",
    "👏🏻",
    "👏🏼",
    "👏🏽",
    "👏🏾",
    "👏🏿",
    "👂",
    "👂🏻",
    "👂🏼",
    "👂🏽",
    "👂🏾",
    "👂🏿",
    "👀",
    "👃",
    "👃🏻",
    "👃🏼",
    "👃🏽",
    "👃🏾",
    "👃🏿",
    "👄",
    "💋",
    "👅",
    "💅",
    "💅🏻",
    "💅🏼",
    "💅🏽",
    "💅🏾",
    "💅🏿",
    "👋",
    "👋🏻",
    "👋🏼",
    "👋🏽",
    "👋🏾",
    "👋🏿",
    "👍",
    "👍🏻",
    "👍🏼",
    "👍🏽",
    "👍🏾",
    "👍🏿",
    "👎",
    "👎🏻",
    "👎🏼",
    "👎🏽",
    "👎🏾",
    "👎🏿",
    "☝",
    "☝🏻",
    "☝🏼",
    "☝🏽",
    "☝🏾",
    "☝🏿",
    "👆",
    "👆🏻",
    "👆🏼",
    "👆🏽",
    "👆🏾",
    "👆🏿",
    "👇",
    "👇🏻",
    "👇🏼",
    "👇🏽",
    "👇🏾",
    "👇🏿",
    "👈",
    "👈🏻",
    "👈🏼",
    "👈🏽",
    "👈🏾",
    "👈🏿",
    "👉",
    "👉🏻",
    "👉🏼",
    "👉🏽",
    "👉🏾",
    "👉🏿",
    "👌",
    "👌🏻",
    "👌🏼",
    "👌🏽",
    "👌🏾",
    "👌🏿",
    "✌",
    "✌🏻",
    "✌🏼",
    "✌🏽",
    "✌🏾",
    "✌🏿",
    "👊",
    "👊🏻",
    "👊🏼",
    "👊🏽",
    "👊🏾",
    "👊🏿",
    "✊",
    "✊🏻",
    "✊🏼",
    "✊🏽",
    "✊🏾",
    "✊🏿",
    "✋",
    "✋🏻",
    "✋🏼",
    "✋🏽",
    "✋🏾",
    "✋🏿",
    "💪",
    "💪🏻",
    "💪🏼",
    "💪🏽",
    "💪🏾",
    "💪🏿",
    "👐",
    "👐🏻",
    "👐🏼",
    "👐🏽",
    "👐🏾",
    "👐🏿",
    "🙏",
    "🙏🏻",
    "🙏🏼",
    "🙏🏽",
    "🙏🏾",
    "🙏🏿",
    "🌱",
    "🌲",
    "🌳",
    "🌴",
    "🌵",
    "🌷",
    "🌸",
    "🌹",
    "🌺",
    "🌻",
    "🌼",
    "💐",
    "🌾",
    "🌿",
    "🍀",
    "🍁",
    "🍂",
    "🍃",
    "🍄",
    "🌰",
    "🐀",
    "🐁",
    "🐭",
    "🐹",
    "🐂",
    "🐃",
    "🐄",
    "🐮",
    "🐅",
    "🐆",
    "🐯",
    "🐇",
    "🐰",
    "🐈",
    "🐱",
    "🐎",
    "🐴",
    "🐏",
    "🐑",
    "🐐",
    "🐓",
    "🐔",
    "🐤",
    "🐣",
    "🐥",
    "🐦",
    "🐧",
    "🐘",
    "🐪",
    "🐫",
    "🐗",
    "🐖",
    "🐷",
    "🐽",
    "🐕",
    "🐩",
    "🐶",
    "🐺",
    "🐻",
    "🐨",
    "🐼",
    "🐵",
    "🙈",
    "🙉",
    "🙊",
    "🐒",
    "🐉",
    "🐲",
    "🐊",
    "🐍",
    "🐢",
    "🐸",
    "🐋",
    "🐳",
    "🐬",
    "🐙",
    "🐟",
    "🐠",
    "🐡",
    "🐚",
    "🐌",
    "🐛",
    "🐜",
    "🐝",
    "🐞",
    "🐾",
    "⚡️",
    "🔥",
    "🌙",
    "☀️",
    "⛅️",
    "☁️",
    "💧",
    "💦",
    "☔️",
    "💨",
    "❄️",
    "🌟",
    "⭐️",
    "🌠",
    "🌄",
    "🌅",
    "🌈",
    "🌊",
    "🌋",
    "🌌",
    "🗻",
    "🗾",
    "🌐",
    "🌍",
    "🌎",
    "🌏",
    "🌑",
    "🌒",
    "🌓",
    "🌔",
    "🌕",
    "🌖",
    "🌗",
    "🌘",
    "🌚",
    "🌝",
    "🌛",
    "🌜",
    "🌞",
    "🍅",
    "🍆",
    "🌽",
    "🍠",
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🍔",
    "🍕",
    "🍖",
    "🍗",
    "🍘",
    "🍙",
    "🍚",
    "🍛",
    "🍜",
    "🍝",
    "🍞",
    "🍟",
    "🍡",
    "🍢",
    "🍣",
    "🍤",
    "🍥",
    "🍦",
    "🍧",
    "🍨",
    "🍩",
    "🍪",
    "🍫",
    "🍬",
    "🍭",
    "🍮",
    "🍯",
    "🍰",
    "🍱",
    "🍲",
    "🍳",
    "🍴",
    "🍵",
    "☕️",
    "🍶",
    "🍷",
    "🍸",
    "🍹",
    "🍺",
    "🍻",
    "🍼",
    "🎀",
    "🎁",
    "🎂",
    "🎃",
    "🎄",
    "🎋",
    "🎍",
    "🎑",
    "🎆",
    "🎇",
    "🎉",
    "🎊",
    "🎈",
    "💫",
    "✨",
    "💥",
    "🎓",
    "👑",
    "🎎",
    "🎏",
    "🎐",
    "🎌",
    "🏮",
    "💍",
    "❤️",
    "💔",
    "💌",
    "💕",
    "💞",
    "💓",
    "💗",
    "💖",
    "💘",
    "💝",
    "💟",
    "💜",
    "💛",
    "💚",
    "💙",
    "🏃",
    "🏃🏻",
    "🏃🏼",
    "🏃🏽",
    "🏃🏾",
    "🏃🏿",
    "🚶",
    "🚶🏻",
    "🚶🏼",
    "🚶🏽",
    "🚶🏾",
    "🚶🏿",
    "💃",
    "💃🏻",
    "💃🏼",
    "💃🏽",
    "💃🏾",
    "💃🏿",
    "🚣",
    "🚣🏻",
    "🚣🏼",
    "🚣🏽",
    "🚣🏾",
    "🚣🏿",
    "🏊",
    "🏊🏻",
    "🏊🏼",
    "🏊🏽",
    "🏊🏾",
    "🏊🏿",
    "🏄",
    "🏄🏻",
    "🏄🏼",
    "🏄🏽",
    "🏄🏾",
    "🏄🏿",
    "🛀",
    "🛀🏻",
    "🛀🏼",
    "🛀🏽",
    "🛀🏾",
    "🛀🏿",
    "🏂",
    "🎿",
    "⛄️",
    "🚴",
    "🚴🏻",
    "🚴🏼",
    "🚴🏽",
    "🚴🏾",
    "🚴🏿",
    "🚵",
    "🚵🏻",
    "🚵🏼",
    "🚵🏽",
    "🚵🏾",
    "🚵🏿",
    "🏇",
    "🏇🏻",
    "🏇🏼",
    "🏇🏽",
    "🏇🏾",
    "🏇🏿",
    "⛺️",
    "🎣",
    "⚽️",
    "🏀",
    "🏈",
    "⚾️",
    "🎾",
    "🏉",
    "⛳️",
    "🏆",
    "🎽",
    "🏁",
    "🎹",
    "🎸",
    "🎻",
    "🎷",
    "🎺",
    "🎵",
    "🎶",
    "🎼",
    "🎧",
    "🎤",
    "🎭",
    "🎫",
    "🎩",
    "🎪",
    "🎬",
    "🎨",
    "🎯",
    "🎱",
    "🎳",
    "🎰",
    "🎲",
    "🎮",
    "🎴",
    "🃏",
    "🀄️",
    "🎠",
    "🎡",
    "🎢",
    "🚃",
    "🚞",
    "🚂",
    "🚋",
    "🚝",
    "🚄",
    "🚅",
    "🚆",
    "🚇",
    "🚈",
    "🚉",
    "🚊",
    "🚌",
    "🚍",
    "🚎",
    "🚐",
    "🚑",
    "🚒",
    "🚓",
    "🚔",
    "🚨",
    "🚕",
    "🚖",
    "🚗",
    "🚘",
    "🚙",
    "🚚",
    "🚛",
    "🚜",
    "🚲",
    "🚏",
    "⛽️",
    "🚧",
    "🚦",
    "🚥",
    "🚀",
    "🚁",
    "✈️",
    "💺",
    "⚓️",
    "🚢",
    "🚤",
    "⛵️",
    "🚡",
    "🚠",
    "🚟",
    "🛂",
    "🛃",
    "🛄",
    "🛅",
    "💴",
    "💶",
    "💷",
    "💵",
    "🗽",
    "🗿",
    "🌁",
    "🗼",
    "⛲️",
    "🏰",
    "🏯",
    "🌇",
    "🌆",
    "🌃",
    "🌉",
    "🏠",
    "🏡",
    "🏢",
    "🏬",
    "🏭",
    "🏣",
    "🏤",
    "🏥",
    "🏦",
    "🏨",
    "🏩",
    "💒",
    "⛪️",
    "🏪",
    "🏫",
    "💻",
    "⏰",
    "⏳",
    "⌛️",
    "📷",
    "📹",
    "🎥",
    "📺",
    "📻",
    "📟",
    "📞",
    "☎️",
    "📠",
    "💽",
    "💾",
    "💿",
    "📀",
    "📼",
    "🔋",
    "🔌",
    "💡",
    "🔦",
    "📡",
    "💳",
    "💸",
    "💰",
    "💎",
    "🌂",
    "👝",
    "👛",
    "👜",
    "💼",
    "🎒",
    "💄",
    "👓",
    "👒",
    "👡",
    "👠",
    "👢",
    "👞",
    "👟",
    "👙",
    "👗",
    "👘",
    "👚",
    "👕",
    "👔",
    "👖",
    "🚪",
    "🚿",
    "🛁",
    "🚽",
    "💈",
    "💉",
    "💊",
    "🔬",
    "🔭",
    "🔮",
    "🔧",
    "🔪",
    "🔩",
    "🔨",
    "💣",
    "🚬",
    "🔫",
    "🔖",
    "📰",
    "🔑",
    "✉️",
    "📩",
    "📨",
    "📧",
    "📥",
    "📤",
    "📦",
    "📯",
    "📮",
    "📪",
    "📫",
    "📬",
    "📭",
    "📄",
    "📃",
    "📑",
    "📈",
    "📉",
    "📊",
    "📅",
    "📆",
    "🔅",
    "🔆",
    "📜",
    "📋",
    "📖",
    "📓",
    "📔",
    "📒",
    "📕",
    "📗",
    "📘",
    "📙",
    "📚",
    "📇",
    "🔗",
    "📎",
    "📌",
    "✂️",
    "📐",
    "📍",
    "📏",
    "🚩",
    "📁",
    "📂",
    "✒️",
    "✏️",
    "📝"
  ];