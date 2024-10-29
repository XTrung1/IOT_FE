import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Demo</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={() => navigate('/register')} style={buttonStyle}>
                    Đăng ký khuôn mặt
                </button>
            </div>
            <div style={{ margin: '20px' }}>
                <button onClick={() => navigate('/attendance')} style={buttonStyle}>
                    Điểm danh
                </button>
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
};

export default HomePage;
