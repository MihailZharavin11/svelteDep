import {json} from '@sveltejs/kit';
import {getUsers} from "../../../core/services/user.service";

export async function GET() {
    const users = await getUsers();
    return json(users);
}


export function POST(e) {
    const data = e.request.json();

    return json(1);
}