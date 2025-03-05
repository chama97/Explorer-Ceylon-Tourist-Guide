import React from 'react';
import styles from './Home.module.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img1 from '../../assets/cover/feature.jpg';
import img2 from '../../assets/cover/feature1.jpg';
import img3 from '../../assets/cover/feature3.jpg';
import img4 from '../../assets/cover/feature4.jpg';
import Footerr from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Nav';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div>
        <Navbar />
      </div>
      <div className={styles.bgImage}>
        <div className={styles.bgBox}>
          <div className={styles.bgText}>
            <p>Welcome to Explorer Ceylon</p>
          </div>
          <div className={styles.bgParag}>
            <p>Discover the beauty of Sri Lanka like never before—where golden beaches meet lush green mountains,
              ancient ruins whisper tales of a glorious past, and vibrant culture, exotic wildlife, breathtaking waterfalls,
              serene temples, and scenic train rides offer a warm embrace.</p>
          </div>
          <div className={styles.bgBtn}>
            <button>Discover Now</button>
          </div>
        </div>
      </div>
      <div className={styles.service}>
        <div className={styles.serviceTop}>
          <p style={{ fontSize: '40px', fontWeight: 700 }}>Explore Sri Lanka</p>
          <div style={{ width: '80%' }}>
            <p style={{ textAlign: 'center', marginTop: '-10px' }}>Explorer Ceylon is your trusted companion for discovering the unparalleled beauty and diversity of Sri Lanka.
              Our mission is to connect travelers with authentic experiences, breathtaking destinations, and personalized
              guidance, ensuring that every journey is unique and unforgettable.</p>
          </div>
        </div>
        <div className={styles.serviceBotm}>
          <Box sx={{ width: '65%', marginTop: '40px', marginBottom: '40px' }}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={img1}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Local Insights
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Discover must-visit destinations in Sri Lanka,from
                      hidden gems to iconic landmarks. Gain valuable
                      knowledge about Sri Lanka's culture, history,
                      and attractions from our expert guides.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={img3}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Tailored Tours
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Enjoy customized tour plans that cater to your
                      interests and preferences for an unforgettable
                      experience. Plan your perfect trip effortlessly
                      based on your budget and time.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={img2}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Weather & Safety Support
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Stay informed with live weather updates to plan
                      your trip better and access crucial emergency
                      services for a worry-free travel experience.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={img4}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Stay with Travel Solutions
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Book your ideal accommodation and reliable
                      vehicles for ensuring convenience and comfort
                      throughout your journey across Sri Lanka.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div>
        <Footerr />
      </div>
    </div>
  )
}

export default Home