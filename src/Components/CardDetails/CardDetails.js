import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
const ImageCard = (props) => {
    const { name, text, setName, type, classes, url } = props;
    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={name}
                    image={url}
                />
                <CardContent>
                    <Typography variant="h6" component="h6">
                        <Grid container spacing={3}>
                            <Grid item xs={3}>Name:</Grid>
                            <Grid item xs={9}>{name || "N/A"}</Grid>
                            <Grid item xs={3}>Text:</Grid>
                            <Grid item xs={9}>{text || "N/A"}</Grid>
                            <Grid item xs={3}>Set Name:</Grid>
                            <Grid item xs={9}> {setName.name || "N/A"}</Grid>
                            <Grid item xs={3}>Type:</Grid>
                            <Grid item xs={9}> {type || "N/A"}</Grid>
                        </Grid>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default withStyles(styles)(ImageCard)