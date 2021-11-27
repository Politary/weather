import styled from 'styled-components/macro';

export const FooterItem = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 24px;
    width: 50%;
    box-sizing: border-box;
    height: 100%;
    img {
        height: 50px;
        width: 50px;
    }
    :first-of-type {
        border-right: 1px solid #8ca4b3;
        justify-content: space-between;
    }
`;

export const WeatherHeader = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    width: 645px;
    padding: 20px 24px;
    border-bottom: 1px solid #8ca4b3;
    border-radius: 6px 6px 0 0;
`;

export const WeatherFooter = styled.div`
    display: flex;
    align-items: center;
    height: 120px;
    width: 645px;
`;

export const WeatherStat = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95px;
    font-size: 0.75rem;
    font-weight: 500;
    color: #8ca4b3;
    padding-right: 32px;
`;

export const StatValue = styled.span`
    color: #435865;
`;

export const CurrentTemp = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 4rem;
    color: #435865;
`;

export const WeatherTypeContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: column;
`;

export const City = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #435865; ;
`;

export const Country = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #8ca4b3;
    padding-left: 12px;
`;

export const Weather = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #435865;
`;

export const Date = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #8ca4b3;
`;

export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 6px;
    background-color: white;
`;
