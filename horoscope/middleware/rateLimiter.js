const reqCounts = new Map();

export function rateLimiter(req, res, next) {
    const ip = req.ip;
    const currentTime = Date.now();

    if(!reqCounts.has(ip)){
        reqCounts.set(ip, []);
    }

    const timestamps = reqCounts.get(ip).filter(ts => currentTime - ts < 60000);
    if(timestamps.length >= 5){
        return res.status(429).send('Too many requests! Please wait a minute');
    }

    timestamps.push(currentTime);
    reqCounts.set(ip, timestamps);

    next();
}