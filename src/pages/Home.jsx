import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  GridList,
  Input,
  InputLabel,
  makeStyles,
} from '@material-ui/core';
import React, { useRef, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  image: {
    width: '100%',
  },
}));
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState({});
  const [count, setCount] = useState(0);
  const classes = useStyles();
  const myFile = useRef();
  const myCanvas = useRef();
  console.log(`render home ${count}`);

  const handleClick = () => {
    setLoading(true);
    let src = cv.imread(myFile.current);
    let dst = new cv.Mat();
    // src.convertTo(src, cv.CV_8U, scale, shift);
    cv.cvtColor(src, src, cv.COLOR_RGB2GRAY);
    console.log(myFile.current.attributeStyleMap.clear());
    console.log(myFile.current.attributes);
    console.log(myFile.current.style);
    cv.pyrDown(src, dst, new cv.Size(0, 0), cv.BORDER_DEFAULT);
    cv.imshow(myCanvas.current, dst);
    src.delete();
    // dst.delete();
    setLoading(false);
    setCount((pv) => pv + 1);
    console.log('proceso finalizado');
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImageURL({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <div>
      <h1>This is home</h1>
      <form className={classes.form}>
        <FormControl>
          <InputLabel htmlFor="my-input" disableAnimation shrink>
            Choose your image
          </InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            type="file"
            hidden
            onChange={onImageChange}
          />
          <FormHelperText id="my-helper-text">
            We don't store any file so your image won't be saved anywhere
          </FormHelperText>
        </FormControl>

        <Button
          // type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={loading}
          onClick={handleClick}
        >
          Print on Screen
        </Button>
      </form>
      <Grid container spacing={1}>
        <Grid item>
          <img
            src={imageURL.image}
            alt="Selected Image"
            style={{ visibility: 'hidden', position: 'absolute' }}
            ref={myFile}
            className={classes.image}
          />
        </Grid>
        <Grid item>
          <canvas className={classes.image} ref={myCanvas}></canvas>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
