import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
} from 'react-bootstrap'
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
  FaSearch,
  FaRandom,
} from 'react-icons/fa'
import { FaHouseChimney } from 'react-icons/fa6'
import { IoIosRadio } from 'react-icons/io'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { CiRepeat } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { MdArrowForwardIos } from 'react-icons/md'
import { episodesData } from '../types/episodesData'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { exploreButtons } from '../types/exploreButtons'
import SearchCards from './SearchCards'

const MyBody = () => {
  return (
    <>
      <Row>
        <Col xl={2} className="aside py-2 ps-3">
          <aside>
            <div className="d-none d-lg-flex align-items-center ms-3 mt-2">
              <img src="/assets/logos/apple.svg" alt="apple-logo" />
              <h4 className="text-white ms-2">Music</h4>
            </div>

            <Navbar expand="lg" className=" flex-column align-items-start p-3">
              <Container fluid className="flex-column p-0">
                <div className="w-100 d-flex justify-content-between align-items-center mb-3">
                  <Navbar.Toggle
                    aria-controls="sidebar-nav"
                    className="d-lg-none border-0"
                    style={{ backgroundColor: 'red' }}
                  />

                  <div className="d-none d-md-flex d-sm-flex d-lg-none align-items-center justify-content-center flex-grow-1 position-relative me-sm-3">
                    <img src="/assets/logos/apple.svg" alt="apple-logo" />
                    <h4 className="text-white ms-2 mb-0 me-sm-3 me-md-3">
                      Music
                    </h4>

                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="d-lg-none position-absolute me-3"
                      style={{ right: 0 }}
                    >
                      Accedi
                    </Button>
                  </div>
                </div>

                <Navbar.Collapse id="sidebar-nav" className="flex-column w-100">
                  <Form className="w-100 mb-3">
                    <Row>
                      <Col xs="auto" className="w-100">
                        <InputGroup className="bg-black text-white">
                          <InputGroup.Text className="bg-black text-white border-0">
                            <FaSearch className="icona myred" />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Cerca"
                            className="bg-black text-white border-0"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </Form>

                  <Nav className="flex-column w-100">
                    <Nav.Link href="#" className="text-light">
                      <FaHouseChimney className="me-2 icona myred" /> Home
                    </Nav.Link>
                    <Nav.Link href="#" className="text-light">
                      <HiOutlineSquares2X2 className="me-2 icona myred" />{' '}
                      Novità
                    </Nav.Link>
                    <Nav.Link href="#" className="text-light">
                      <IoIosRadio className="me-2 icona myred" /> Radio
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </aside>
        </Col>
        <Col xl={10} className="p-0">
          <main className="main-content">
            <div className="playerbar d-none d-lg-flex align-items-center px-3">
              <Row className="w-100">
                <Col xl={4} className="d-flex align-items-center gap-3">
                  <FaRandom className="iconeplayer" />
                  <FaStepBackward className="iconeplayer" />
                  <FaPlay className="iconeplayer" />
                  <FaPause className="iconeplayer" />
                  <FaStepForward className="iconeplayer" />
                  <CiRepeat className="iconeplayer" />
                </Col>

                <Col
                  xl={4}
                  className="d-flex justify-content-center align-items-center divplayer"
                >
                  <img
                    src="/assets/logos/apple.svg"
                    alt="apple-logo"
                    style={{ height: '25px' }}
                  />
                </Col>

                <Col
                  xl={4}
                  className="d-flex align-items-center justify-content-end gap-3"
                >
                  <FaVolumeUp className="iconeplayer" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="volume-slider"
                  />

                  <Button
                    variant="danger"
                    className="d-flex align-items-center"
                  >
                    <CgProfile className="me-1" />
                    Accedi
                  </Button>
                </Col>
              </Row>
            </div>

            <Container fluid className="p-3 hero text-light">
              <h2 className="mb-2 ms-2">Novità</h2>

              <Row className="g-3">
                <Col md={6} className="d-flex">
                  <Card className="banner-card flex-fill d-flex flex-column w-100 card-senza-bordo">
                    <Card.Body className="flex-grow-1 hero text-light">
                      <small>NUOVA STAZIONE RADIO</small>
                      <p>
                        Rilassati, al resto pensiamo noi. Ascolta Apple Music
                        Chill
                      </p>
                    </Card.Body>

                    <div className="card-img-wrapper">
                      <img
                        src="/assets/images/1a.png"
                        alt="Apple Music Chill"
                      />
                    </div>
                  </Card>
                </Col>

                <Col md={6} className="d-flex">
                  <Card className="banner-card flex-fill d-flex flex-column w-100 card-senza-bordo">
                    <Card.Body className="flex-grow-1 hero text-light">
                      <small>NUOVA STAZIONE RADIO</small>
                      <p>Ecco la nuova casa della musica latina</p>
                    </Card.Body>

                    <div className="card-img-wrapper">
                      <img src="/assets/images/1b.png" alt="Musica Uno" />
                    </div>
                  </Card>
                </Col>
              </Row>

              <h5 className="section-title my-3 ms-2">
                Nuovi episodi radio <MdArrowForwardIos />
              </h5>
              <Row xs={1} sm={2} md={3} xl={5} className="g-4">
                {episodesData.map((episode, idx) => (
                  <Col key={idx} className={idx === 5 ? 'd-lg-none' : ''}>
                    <Card className="h-100 card-senza-bordo">
                      <Card.Img
                        variant="top"
                        src={episode.src}
                        alt={episode.title}
                        className="episode-img"
                      />
                      <Card.Body className="d-flex flex-column hero text-light">
                        <Card.Title className="flex-grow-1">
                          {episode.title}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <h5 className="section-title my-3 ms-2">Nuove uscite</h5>
              <SearchCards
                searchTerms={[
                  'queen',
                  'eminem',
                  'madonna',
                  'rihanna',
                  'coldplay',
                ]}
              />

              <h5 className="section-title my-3 ms-2">Altro da esplorare</h5>
              <Row className="g-3 explore-row">
                {exploreButtons.map((label, idx) => (
                  <Col xs={12} md={12} lg={4} key={idx}>
                    <Card
                      className="cardbutton d-flex flex-row justify-content-between align-items-center p-3"
                      role="button"
                    >
                      <span className="myred">{label}</span>
                      <MdArrowForwardIos className="myred" />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </main>

          <footer className="footer d-flex flex-column align-items-center py-4">
            <div className="mb-3 d-flex">
              <a href="#" className="text-black mx-2">
                <BsFacebook className="fs-4" />
              </a>
              <a href="#" className="text-black mx-2">
                <BsInstagram className="fs-4" />
              </a>
              <a href="#" className="text-black mx-2">
                <BsTwitter className="fs-4" />
              </a>
              <a href="#" className="text-black mx-2">
                <BsYoutube className="fs-4" />
              </a>
            </div>

            <div className="mb-2 text-center text-white-50 small">
              Italia · English (UK)
            </div>

            <div className="mb-3 text-center text-white-50 small">
              &copy; 2024 Apple Inc. Tutti i diritti riservati.
            </div>

            <div className="footer-links d-flex flex-wrap justify-content-center">
              <a href="#" className="text-black mx-2 text-white-50 small">
                Condizioni del servizio internet
              </a>
              <a href="#" className="text-black mx-2 text-white-50 small">
                Apple Music e privacy
              </a>
              <a href="#" className="text-black mx-2 text-white-50 small">
                Avviso sui cookie
              </a>
              <a href="#" className="text-black mx-2 text-white-50 small">
                Supporto
              </a>
              <a href="#" className="text-black mx-2 text-white-50 small">
                Feedback
              </a>
            </div>
          </footer>
        </Col>
      </Row>
    </>
  )
}

export default MyBody
