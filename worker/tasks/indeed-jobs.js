import fetch from "node-fetch";
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

function huij () {
    console.log("hello")
}

async function fetchJobs () {
    const url = 'https://indeed-indeed.p.rapidapi.com/apisearch?publisher=wertyuu&v=2&format=json&callback=huij&q=java&l=austin%2C%20tx&sort=%3CREQUIRED%3E&radius=25&st=%3CREQUIRED%3E&jt=%3CREQUIRED%3E&start=%3CREQUIRED%3E&limit=%3CREQUIRED%3E&fromage=%3CREQUIRED%3E&highlight=%3CREQUIRED%3E&filter=%3CREQUIRED%3E&latlong=%3CREQUIRED%3E&co=%3CREQUIRED%3E&chnl=%3CREQUIRED%3E&userip=%3CREQUIRED%3E&useragent=%3CREQUIRED%3E';

    const options = {
    method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a5df23920amsh455c338f56ded04p178191jsn63a132e1cdda',
            'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
        }
    };

    const smapleResponse = [{
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Developer",
        company: "Google",
        location: "India",
        created_at: "Sun 26 Jan 2023"
    }, {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Developer",
        company: "Google",
        location: "London",
        created_at: "Mon 27 Jan 2023"
    }, {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "FrontEnd Developer",
        company: "Google",
        location: "Australia",
        created_at: "Wed 31 Jan 2023"
    }, {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Devops Engineer",
        company: "Google",
        location: "New York",
        created_at: "Sun 06 Feb 2023"
    }, {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Tester",
        company: "Google",
        location: "Nepal",
        created_at: "Thu 09 Feb 2023"
    }, , {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Tester",
        company: "Google",
        location: "Nepal",
        created_at: "Thu 09 Feb 2023"
    }, , {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Tester",
        company: "Google",
        location: "Nepal",
        created_at: "Thu 09 Feb 2023"
    }, , {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Tester",
        company: "Google",
        location: "Nepal",
        created_at: "Thu 09 Feb 2023"
    }, , {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Tester",
        company: "Google",
        location: "Nepal",
        created_at: "Thu 09 Feb 2023"
    }, , {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Tester",
        company: "Google",
        location: "Nepal",
        created_at: "Thu 09 Feb 2023"
    }, , {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Tester",
        company: "Google",
        location: "Nepal",
        created_at: "Thu 09 Feb 2023"
    }, , {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Tester",
        company: "Google",
        location: "Nepal",
        created_at: "Thu 09 Feb 2023"
    }, , {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Tester",
        company: "Google",
        location: "Nepal",
        created_at: "Thu 09 Feb 2023"
    }, , {
        id: "11124qwererwer212321sdfwerwe214234",
        title: "Software Tester",
        company: "Google",
        location: "Nepal",
        created_at: "Thu 09 Feb 2023"
    }];

    try {
        const res = await fetch(url, options);
        const resp = await res.json();

        await client.set('jobs', JSON.stringify(resp));
        const value = await client.get('jobs');
        console.log(client.isReady, "value", value);
        
        return resp;
    } catch ( e ) {
        console.error('error:' + e);

        await client.set('jobs', JSON.stringify(smapleResponse));
        const value = await client.get('jobs');
        console.log(client.isReady, "value", value);

        return smapleResponse;
    }
}

export default fetchJobs;
