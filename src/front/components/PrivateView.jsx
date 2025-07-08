import { useEffect, useState } from "react";
import "../styles/PrivateView.css";
export function PrivateView() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchPrivateData = async () => {
            const token = sessionStorage.getItem("token");

            try {
                const response = await fetch("https://congenial-enigma-4jwpr5rj495whq666-3001.app.github.dev/api/private", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error("No autorizado");
                }

                const data = await response.json();
                setData(data);

            } catch (error) {
                console.error("Error:", error.message);
            }
        };

        fetchPrivateData();
    }, []);

    return (
        <div className="private-container">
            <h2 className="private-title"> Welcome to Silk's Road!</h2>

            {data ? (
                <div className="private-card">
                    <p><strong>Message:</strong> {data.msg}</p>
                    <p><strong>Email:</strong> {data.user.email}</p>
                    <p><strong>USER'S ID:</strong> {data.user.id}</p>
                </div>
            ) : (
                <p>Cargando</p>
            )}
        </div>
    );
}