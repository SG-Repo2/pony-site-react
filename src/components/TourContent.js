import React from 'react';

// Example data structure
const tourDates = [
  { id: 1, date: '09/15/2023', city: 'New York, NY', venue: 'Chuck E Cheese' },
  { id: 2, date: '09/18/2023', city: 'Los Angeles, CA', venue: 'Chuck E Cheese' },
  { id: 3, date: '09/22/2023', city: 'Chicago, IL', venue: 'Chuck E Cheese' },
  { id: 4, date: '09/25/2023', city: 'Houston, TX', venue: 'Chuck E Cheese' },
  { id: 5, date: '09/28/2023', city: 'Miami, FL', venue: 'Chuck E Cheese' },
  { id: 6, date: '10/01/2023', city: 'Dallas, TX', venue: 'Chuck E Cheese' },
  { id: 7, date: '10/04/2023', city: 'San Francisco, CA', venue: 'Chuck E Cheese' },
  { id: 8, date: '10/08/2023', city: 'Seattle, WA', venue: 'Chuck E Cheese' },
  { id: 9, date: '10/11/2023', city: 'Denver, CO', venue: 'Chuck E Cheese' },
  { id: 10, date: '10/15/2023', city: 'Atlanta, GA', venue: 'Chuck E Cheese' },
];

function TourContent() {
  return (
    <>
      <h1>Upcoming Shows</h1>
      <table>
        {/* Optional: Add <thead> here if needed */}
        <tbody>
          {tourDates.map(show => (
            <tr key={show.id}> {/* Add unique key */}
              <td>{show.date}</td>
              <td>{show.city}</td>
              <td>{show.venue}</td>
              <td>
                {/* Add onClick handler if tickets link is dynamic */}
                {/* Added specific class 'tour-buy-button' */}
                <button className="tour-buy-button">Buy Tickets</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TourContent;
