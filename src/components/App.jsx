import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout ';
import { GlobalStyle } from './GlobalStyles/global.styled';
import Home from 'pages/Home';
import Tweets from 'pages/Tweets';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={SharedLayout} />
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
