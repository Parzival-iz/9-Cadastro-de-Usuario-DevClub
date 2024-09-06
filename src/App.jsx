import { Title } from './styles'

function Home() {

  return (
    <Container>
      <TopBackground>
        <img />
      </TopBackground>


      <Form>
        <Title>Cadastrar Usuário</Title>


        <ContainerInput>
          <div>
            <div>
              <InputLabel>
                Nome <span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do usuário' />
            </div>

            <div>
              <InputLabel>
                Idade <span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do usuário' />
            </div>
            <div>
              <InputLabel>
                E-mail <span>*</span>
              </InputLabel>
            </div>
            <Input type='email' placeholder='E-mail do usuário' />
          </div>

        </ContainerInput>
        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default App
