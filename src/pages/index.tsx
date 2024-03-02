import React, { useEffect } from 'react';
import styles from '../styles/Styles.module.css';
import { Application } from '@splinetool/runtime';
import Header from '../components/Header';

export default function Home() {
  useEffect(() => {
    
    const loadSplineScene = (canvasId: string, splineUrl: string) => {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
      if (canvas instanceof HTMLCanvasElement) {
        const app = new Application(canvas);
        app.load(splineUrl);
      }
    };

   
    loadSplineScene('canvas3d-1', 'https://prod.spline.design/4n7GICMTMWqHJHwo/scene.splinecode');
    loadSplineScene('canvas3d-2', 'https://prod.spline.design/XfY78btwEJMB0OZu/scene.splinecode');
    loadSplineScene('canvas3d-3', 'https://prod.spline.design/0P7ELUCwSVoSmEbD/scene.splinecode');
    loadSplineScene('canvas3d', 'https://prod.spline.design/sr9irHStnJwtQ8e6/scene.splinecode');
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.infoBoxWithSpline}>
          <div className={styles.infoBoxContent}>
            <h2 className={styles.infoBoxTitle}>Welcome</h2>
            <p className={styles.infoBoxDescription}>
              Venture is a user-friendly app offering valuable insights into population demographics, rental trends, and park amenities across the Lower Mainland region of British Columbia. With interactive maps and data-driven analysis, users can explore population dynamics, find rental options, and discover parks and recreational facilities tailored to their preferences. Whether you're a resident, tourist, or prospective homeowner, this app serves as your guide to navigating and engaging with the diverse communities and offerings of the Lower Mainland.
            </p>
          </div>
          <div className={styles.splineContainer}>
            <canvas id="canvas3d" className={styles.splineCanvas}></canvas>
          </div>
        </div>
        <section className={styles.pricingBoxes}>
          <div className={styles.card}>
            <h2>Emerging</h2>
            <p className={styles.price}>$9.99/mo</p>
            <div className={styles.splineContainer}>
              <canvas id="canvas3d-1" className={styles.splineCanvas}></canvas>
            </div>
            <ul>
              {['View Rent'].map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Standard Plan</h2>
            <p className={styles.price}>$19.99/mo</p>
            <div className={styles.splineContainer}>
              <canvas id="canvas3d-2" className={styles.splineCanvas}></canvas>
            </div>
            <ul>
              {['View Rent', 'View Parks'].map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Advanced</h2>
            <p className={styles.price}>$29.99/mo</p>
            <div className={styles.splineContainer}>
              <canvas id="canvas3d-3" className={styles.splineCanvas}></canvas>
            </div>
            <ul>
              {['View population', 'View Parks', 'View Rent by Area'].map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.signupForm}>
          <h2>Sign Up for Updates</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Your Phone Number" />
            <button type="submit">Sign Up</button>
          </form>
        </section>
      </main>
    </div>
  );
}
