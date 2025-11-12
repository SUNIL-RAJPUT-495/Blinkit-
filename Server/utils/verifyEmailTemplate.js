const verifyEmailTemplate = ({name,url})=>{
    return `
    <p>Dear ${name}</p>
    <p>Dear ${name}</p>
    <p>Thank you for registering Binkeyit.</p>
    <a href=${url} style="colour:white;backgroung:blue;margin-top:10px">
        Verify Email
    </a>`
}
export default verifyEmailTemplate