class Client
{
    constructor(id, name, email, phone, subject, message)
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.subject = subject;
        this.message = message
    }
}

module.exports = Client;