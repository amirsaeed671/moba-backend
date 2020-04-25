const mongoose = require('mongoose');
const {gql} = require('apollo-server-express');
const CreateTestServer = require('../../test-server');
const {User, Hero} = require('../../mongodb/models');

const CREATE_USER = gql`
    mutation {
        createUser(input: {name: "test", email: "test@test.com", password: "123456"}) {
            name
            email
            password
        }
    }
`;


describe("user mutation tests", () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    test("it should create a user in db", async () => {

        const {mutate} = CreateTestServer({
            User,
            Hero
        })

        const res = await mutate({mutation: CREATE_USER});

        expect(res).toMatchSnapshot();
        expect(1).toBeTruthy();
    });
});

