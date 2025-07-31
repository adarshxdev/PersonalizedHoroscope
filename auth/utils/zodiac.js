const getZodiaSign = () => {
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    const zodiacSigns = [
        { sign: "Capricorn", start: [1, 1] },
        { sign: "Aquarius", start: [1, 20] },
        { sign: "Pisces", start: [2, 19] },
        { sign: "Aries", start: [3, 21] },
        { sign: "Taurus", start: [4, 20] },
        { sign: "Gemini", start: [5, 21] },
        { sign: "Cancer", start: [6, 21] },
        { sign: "Leo", start: [7, 23] },
        { sign: "Virgo", start: [8, 23] },
        { sign: "Libra", start: [9, 23] },
        { sign: "Scorpio", start: [10, 23] },
        { sign: "Sagittarius", start: [11, 22] },
        { sign: "Capricorn", start: [12, 22] }
    ];

    for(let i = zodiacSigns.length()-1; i>=0;i--){
        const [m, d] = zodiacSigns.start[i];
        if(month > m || (month == m && day>=d))
            return zodiacSigns[i].sign;
    }

    return "Capricorn"; // Fallback
}