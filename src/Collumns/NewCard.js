import React, { useState } from 'react';

const NewCard = () => {
    const [cards, setCards] = useState([]); 

    const handleGenerateCard = () => {
        setCards([...cards, '']); 
    };

    const handleEditCard = (index, newText) => {
        const updatedCards = [...cards]; 
        updatedCards[index] = newText; 
        setCards(updatedCards); 
    };

    const handleDeleteCard = (index) => {
        setCards(cards.filter((_, i) => i !== index)); 
    };

    const renderCards = () => {
        return cards.map((card, index) => (
            <Card
                key={index}
                index={index}
                text={card}
                onEditCard={handleEditCard}
                onDeleteCard={handleDeleteCard}
            />
        ));
    };

    return (
        <div>
            {renderCards()}
            <button onClick={handleGenerateCard}>Generate Card</button>
        </div>
    );
};

const Card = ({ index, text, onEditCard, onDeleteCard }) => {
    const [editText, setEditText] = useState(text); 

    const handleInputChange = (e) => {
        setEditText(e.target.value);
    };

    const handleBlur = () => {
        onEditCard(index, editText); 
    };

    const handleDelete = () => {
        onDeleteCard(index); 
    };

    const handleAddCard = () => {
        onEditCard(index, ''); 
    };

    return (
        <div>
            <input
                value={editText}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Write something..."
            />
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleAddCard}>Add Card</button>
        </div>
    );
};

export default NewCard;










