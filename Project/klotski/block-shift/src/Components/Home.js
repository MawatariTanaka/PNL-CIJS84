import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../contexts/gameContext';
import { addNewLevel } from '../backend/levelModifier';
import { collection, query, where, getDocs } from '@firebase/firestore';
import { db, convertObjectToNestedArray } from '../contexts/firebaseContext';

export default function Home() {
    const navigate = useNavigate();
    const { dispatch } = useContext(GameContext);
    const handlePlay = async () => {
        const q = query(collection(db, 'grid'), where('level', '==', 0));
        const querySnapshot = await getDocs(q);
        const result = querySnapshot.docs[0].data();
        const { initGrid, targetGrid } = result;
        dispatch({
            type: 'SET_GRID',
            payload: {
                initGrid: convertObjectToNestedArray(initGrid),
                targetGrid: convertObjectToNestedArray(targetGrid),
            },
        });
        navigate('/game');
    };

    // const initGrid = [
    //     [1, 0, 2],
    //     [3, 0, 0],
    // ];
    // const targetGrid = [
    //     [0, 0, 0],
    //     [0, 0, 1],
    // ];
    // addNewLevel(initGrid, targetGrid, 1);

    return (
        <main className="home">
            <div className="home-game-preview"></div>
            <div className="home-btn-container">
                <button className="home-nav" onClick={handlePlay}>
                    Play
                </button>
            </div>
        </main>
    );
}
