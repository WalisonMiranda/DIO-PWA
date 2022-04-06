import React, { memo } from "react";
import { Card, Typography, Button, Select, MenuItem } from "../../components";
import COUNTRIES from "../../utils/countries";
import { CardPanelContentStyled, ItemStyled } from "./style";

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country }) {
  const { cases } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  const textCovid19 = `País: ${country} - Total de casos: ${cases}`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: "https://pwa-dio.vercel.app/",
    });
  };

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID-19
          </Typography>

          <Typography
            className="ml-2"
            variant="h6"
            component="span"
            color="primary"
          >
            Painel Coronavirus
          </Typography>

          <Typography
            className="ml-2"
            variant="body2"
            component="span"
            color="primary"
          >
            Atualizado em: {updateAt}
          </Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
