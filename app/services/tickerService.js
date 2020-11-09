import io from 'socket.io-client';
import { store } from '../store/configureStore.dev';
let socket = null;

export const connect = (stockSymbol) => {
    socket = io('http://localhost:4000');

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            store.dispatch({
                type: 'RECIEVE_DATA',
                payload: data
            });
        });

        socket.emit('ticker', stockSymbol);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};
