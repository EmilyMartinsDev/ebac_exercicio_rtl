import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('deve adicionar 2 comentarios ao post', ()=>{
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId("coment-space"), {
            target: {
                value: "comentario numero 1"
            }
        })
        fireEvent.click(screen.getByTestId("btn-comentar"))

        fireEvent.change(screen.getByTestId("coment-space"), {
            target: {
                value: "comentario numero 2"
            }
        })
        fireEvent.click(screen.getByTestId("btn-comentar"))

        expect(screen.getAllByTestId("comentario")).toHaveLength(2)
    })
});