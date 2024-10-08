export async function load({fetch}) {


    const userResponse = await fetch('/api/user', {method: 'GET'})

    const user = await userResponse.json();
    return {
        user
    }


}