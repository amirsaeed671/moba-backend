const mongoose = require('mongoose');
const {gql} = require('apollo-server-express');
const CreateTestServer = require('../../test-server');
const {User, Hero} = require('../../mongodb/models');

const ALL_USERS = gql`
    query {
        allUsers {
            name
        }
    }
`;

describe("queries test", () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });


    test("initial test", async () => {
        const find = jest.fn()

        const {query} = CreateTestServer({
            User
        })

        const res = await query({query: ALL_USERS});

        expect(res).toMatchSnapshot();
    });
});