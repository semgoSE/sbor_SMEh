import React, { Component } from 'react';
import { Card, Div, Header, Title, SimpleCell, Separator, RichCell, Progress, Button } from '@vkontakte/vkui';
import './Snippet.css';

const Snippet = ({ img, name, type, disabled }) => (
    <Div>
        <Card mode='outline'>
    
                <img src={img} className='img' />
                <SimpleCell disabled multiline description={'Матвей Правосудов · ' + (type == 'reqular' ? 'Помощь нужна каждый месяц' : 'Матвей Правосудов · Закончится через 5 дней')}>
                <Title level='3'>{name}</Title>
                </SimpleCell>
                <Separator />
                <SimpleCell disabled multiline after={<Div><Button disabled={disabled} mode='outline'>Помочь</Button></Div>} description={<Progress />}>
                Помогите первым
                </SimpleCell>

        </Card>
    </Div>
)
export default Snippet;