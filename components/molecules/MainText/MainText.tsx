import { ReactNode } from 'react'
import { Container, SubTitle, Title } from './styles'

interface Props {
    title: ReactNode
    subTitle: ReactNode
}

const MainText = ({ title, subTitle }: Props) => (
    <Container>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
    </Container>
)

export default MainText
