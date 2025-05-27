import vine from '@vinejs/vine'
const schema =  vine.object({
    username: vine.string().minLength(1).unique( async(db, value, _field)=>{
        const user = await db.from('users')
                             .where('username',value)
                             .first()
        return !user
    }),
    password: vine.string().minLength(7).confirmed(),
})

export const registerUserValidator = vine.compile(schema)