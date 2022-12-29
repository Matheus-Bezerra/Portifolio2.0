import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { CardComponent } from '../../../../Card'
import IgniteShopImg from '../../../../../assets/igniteShop.png'
import DashGoImg from '../../../../../assets/dashGo.jpg'
import DtMoneyImg from '../../../../../assets/dtMoney.jpg'
import TaskImg from '../../../../../assets/task.jpg'
import InstagramerImg from '../../../../../assets/instagramer.jpg'
import PizzaImg from '../../../../../assets/pizzas.jpg'

export const Cards = () => {
  return (
    <>
        <CardComponent link={{url: 'https://github.com/Matheus-Bezerra/IgniteShop', textAlt: 'Ignite Shop'}} image={IgniteShopImg} heading="Ignite Shop" description='Um e-commerce de camisetas utilizando para simular pagamentos a Api do Stripe.' tecnologies={["Next", "Typescript", "Stripe", "React", "Axios", "Keen-slider", "Stitches"]}>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' as="a" target={"_blank"} href='https://github.com/Matheus-Bezerra/IgniteShop'>
          Repositório
        </Button>
      </ButtonGroup>
    </CardComponent>

    <CardComponent link={{url: 'https://github.com/Matheus-Bezerra/DashGo', textAlt: 'DashGo'}} image={DashGoImg} heading="Dash Go" description='Uma Dashboard que contém listagem e criação de usuários, gráficos de dados entre outras funcionalidades.' tecnologies={["Next", "React", "Typescript", "Tan Stack", "Axios", "Mirage Js", "Faker", "Chakra UI", "React Hook Form", "YUP"]}>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' as="a" target={"_blank"} href="https://github.com/Matheus-Bezerra/DashGo">
          Repositório
        </Button>
      </ButtonGroup>
    </CardComponent>
    <CardComponent link={{url: 'https://github.com/Matheus-Bezerra/dtMoney', textAlt: 'Sistema de finanças que pode colocar suas despesas e receitas para assim ter um controle financeiro melhor'}} image={DtMoneyImg} heading="Dt Money" description='Dashboard para o usuário ter um controle financeiro melhor, controlando suas despesas e receitas.' tecnologies={["React", "Typescript", "Context API", "JSON Server", "Axios", "Styled Components", "ZOD", "React Hook Form", "Context Selectors"]}>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' as="a" target={"_blank"} href='https://github.com/Matheus-Bezerra/dtMoney'>
          Repositório
        </Button>
      </ButtonGroup>
    </CardComponent>

    <CardComponent link={{url: 'https://github.com/Matheus-Bezerra/TaskCalendar', textAlt: 'Sistema para colocar suas tarefas do dia a dia'}} image={TaskImg} heading="Tasks Web" description='Aplicação Full Stack para o usuário colocar suas tarefas do seu dia a dia, com isso tendo uma organização melhor do seu dia.' tecnologies={["React", "Typescript", "Context API", "Chakra UI", "Axios", "Apex Charts", "Node", "React Hook Form", "UUID"]}>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' as="a" target={"_blank"} href='https://github.com/Matheus-Bezerra/TaskCalendar'>
          Repositório
        </Button>
      </ButtonGroup>
    </CardComponent>

    <CardComponent link={{url: 'https://github.com/Matheus-Bezerra/Instagramer', textAlt: 'Instagram 2.0 pra curtir publicações, comentar e curtir o design'}} image={InstagramerImg} heading="Instagramer" description='Uma página com objetivo de ter um design um pouco mais futurista do instagram, como se fosse um 2.0' tecnologies={["HTML", "CSS", "Javascript"]}>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' as="a" target={"_blank"} href='https://github.com/Matheus-Bezerra/Instagramer'>
          Repositório
        </Button>
      </ButtonGroup>
    </CardComponent>

    <CardComponent link={{url: 'https://github.com/Matheus-Bezerra/Pizzaria-do-Z-', textAlt: 'Página de pizza onde contém um carrinho para simular uma compra de diversos tipos de pizzas'}} image={PizzaImg} heading="Pizzaria do Z" description='Página de pizzas onde contém um carrinho de compras para adicionar diversos tipos de pizzas, simulando uma compra' tecnologies={["HTML", "CSS", "Javascript"]}>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' as="a" target={"_blank"} href='https://github.com/Matheus-Bezerra/Pizzaria-do-Z-'>
          Repositório
        </Button>
      </ButtonGroup>
    </CardComponent>
    </>
    
  )
}
