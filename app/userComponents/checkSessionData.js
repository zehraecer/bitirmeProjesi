
export const CheckSessionData = async (one, two, there) => {
    try {
        const response = await fetch('/api/checkSession');
        const data = await response.json();

        if (response.ok) {
            const { session } = data;
            console.log(session);
            one(session.user.user_metadata.name);
            two(session.user.email);
            there(true);
        } else {
            console.error(data.error);
        }
    } catch (error) {
        console.error("Oturum kontrol hatası: ", error);
    }
}

export const LogOutUser = async (one, two) => {

    try {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Çıkış yapma hatası');
        }
        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error(error.message);
    } finally {
        one(!two);
    }
}