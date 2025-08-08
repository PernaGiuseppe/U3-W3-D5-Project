import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'

type DeezerTrack = {
  id: number
  title: string
  artist: { name: string }
  album: { cover_medium: string }
}

interface SearchCardsProps {
  searchTerms: string[]
}

const SearchCards: React.FC<SearchCardsProps> = ({ searchTerms }) => {
  const [tracks, setTracks] = useState<DeezerTrack[]>([])

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const results: DeezerTrack[] = []

        for (const term of searchTerms) {
          const res = await fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/search?q=${encodeURIComponent(
              term
            )}`
          )
          const data = await res.json()
          if (data.data) {
            results.push(...data.data)
          }
        }

        const uniqueResults = Array.from(
          new Map(results.map((track) => [track.id, track])).values()
        )

        const shuffled = uniqueResults.sort(() => 0.5 - Math.random())
        setTracks(shuffled.slice(0, 10))
      } catch (error) {
        console.error('Errore nel recupero tracce:', error)
      }
    }

    fetchTracks()
  }, [searchTerms])

  return (
    <Row xs={2} md={4} xl={5} className="g-3 releases-grid">
      {tracks.slice(0, 10).map((track, idx) => {
        let colClass = ''

        if (idx === 9) {
          colClass = 'd-sm-none d-md-block'
        }
        if (idx === 8 || idx === 9) {
          colClass = 'd-md-none d-lg-block'
        }

        return (
          <Col key={track.id} className={colClass}>
            <Card className="card-senza-bordo h-100">
              <Card.Img
                variant="top"
                className="episode-img"
                src={track.album.cover_medium}
              />
              <Card.Body className="hero text-light">
                <Card.Title>{track.title}</Card.Title>
                <Card.Text>{track.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default SearchCards
