import React, { useEffect, useRef } from 'react';
import "./admin.css"
import { Chart } from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faSchool, faSchoolFlag, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    let chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'School Sales',
          data: [12, 19, 3, 5, 2, 3, 12, 16,8,20,14,10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // return a cleanup function that destroys the previous Chart instance
    return () => {
      chartInstance.destroy();
    }
  }, []);

  return (
    <div className='admin-content'>
         {/* First row */}
      <div className='admin-row'>
        <div className='admin-box'>
        <p>99<br/><span>No. of Schools</span></p>
        <p className='icon'><FontAwesomeIcon icon={faSchoolFlag} size='lg'/></p>
        </div>
        <div className='admin-box'>
        <p>1500<br/><span>No. of Students</span></p>
        <p className='icon'> <FontAwesomeIcon icon={faBookmark} size='lg' /></p>
        </div>
        <div className='admin-box'>
        <p>990<br/><span>No. of Tutors</span></p>
        <p className='icon'><FontAwesomeIcon icon={faSchool} size='lg'/></p>
        </div>
        <div className='admin-box'>
        <p>$10,000<br/><span>Total Turnover</span></p>
        <p className='icon'> <FontAwesomeIcon icon={faDollarSign} size='lg'/></p>
        </div>
      </div>

      {/* Second row */}
      <div className='admin-row'>
        <div className='admin-table'>
          <table>
            <thead>
              <tr>
                <th>School Name</th>
                <th>No. of Students</th>
                <th>School Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>School A</td>
                <td>50</td>
                <td>0722222222</td>
                <td className='school-buttons'>
                  <button className='button'>Edit</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className='button'>Delete</button>
                </td>
              </tr>
              <tr>
                <td>School B</td>
                <td>30</td>
                <td>0722222222</td>
                <td>
                  <button>Edit</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>School C</td>
                <td>20</td>
                <td>0722222222</td>
                <td>
                  <button>Edit</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>School A</td>
                <td>50</td>
                <td>0722222222</td>
                <td>
                  <button>Edit</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>School A</td>
                <td>50</td>
                <td>0722222222</td>
                <td>
                  <button>Edit</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='admin-pagination'>
            <button>Prev</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
        <div className='admin-chart'>
          <canvas ref={chartRef} width={800} height={500}></canvas>
        </div>
      </div>

      {/* Third row */}
      <div className='admin-row'>
        <h3>Third Row</h3>
        <p>This is where you can add more content to your dashboard.</p>
      </div>
    </div>
  )
}

export default Dashboard