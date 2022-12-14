import svgCaptcha from 'svg-captcha'
class PublicController {
    constructor() {

    }
    async getCaptcha(ctx) {
        const newCaptcha = svgCaptcha.create({
            size: 4,
            ignoreChars: '0o1il',
            color: true,
            noise: Math.floor(Math.random() * 5),
            height: 45,
        })
        console.log(newCaptcha)
        ctx.body = {
            code: 200,
            data: newCaptcha.data
        }
    }
}

export default new PublicController();