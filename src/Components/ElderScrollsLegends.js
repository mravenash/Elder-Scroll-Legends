import React, { useState, useEffect } from 'react';
import CardDetails from './CardDetails/CardDetails'
import useInfiniteScroll from "../Hooks/InfiniteScroll";
import SearchComponent from './Search/Search';
import Notification from './Notification/Notification';
import { url, PAGE_SIZE } from './constants';
import Loader from 'react-loader-spinner'
import styles from './style';
import { isEmpty } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Axios from 'axios';

const ElderScrollsLegends = (props) => {
    const { classes } = props;
    const [imageList, setImageList] = useState([]);
    const [page, setPage] = useState(1);
    const [isEmptyData, setEmptyData] = useState(false);
    const [loading, setLoading] = useInfiniteScroll(fetchData);
    const [searchInput, setSearchInput] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // Fetch 20 records on initial load, this will call FetchData.
        setLoading(true);
    }, [])


    //Fetch data on on scroll
    async function fetchData() {
        const fetchDataUrl = `${url}?name=${searchInput || ""}&page=${page}&pageSize=${PAGE_SIZE}`
        const noRecords = window.localStorage.getItem(searchInput.toLowerCase());
        if (noRecords) {
            setLoading(false);
            setEmptyData(true);
            return;
        }
        try {
            const { data: { cards } } = await Axios.get(fetchDataUrl);
            if (!isEmpty(cards)) {
                setEmptyData(false);
                setImageList([...imageList, ...cards]);
                setPage(prev => prev + 1);
            } else {
                setEmptyData(true);
                // Set emptyRecords
                window.localStorage.setItem(searchInput.toLowerCase(), true);
            }
        }
        catch (err) {
            setIsError(true)
        }

        setLoading(false);
    }

    const handleChange = async (event) => {
        const { value } = event.target;
        const fetchDataUrl = `${url}?name=${value}&pageSize=${PAGE_SIZE}`;

        try {
            const { data: { cards } } = await Axios.get(fetchDataUrl);
            setImageList([...cards])
            if (isEmpty(cards)) {
                setEmptyData(true)
            }

        } catch (err) {
            setIsError(true)
        }

        setSearchInput(value);
        setPage(2);
    }

    return (<>

        <SearchComponent handleChange={handleChange} inputValue={searchInput} />
        {
            isError ? <Notification type={"error"} title={"Error"} message={"Api is currenlty down, try again later"} /> :
                !isEmpty(imageList) && imageList.map((image) => {
                    const { id, imageUrl, name, set, text, type } = image;
                    return <CardDetails className={classes.alignCenter} key={id} name={name}
                        text={text} url={imageUrl} setName={set} type={type} />
                })
        }
        {
            loading && <Loader type="ThreeDots" color="#00BFFF" height={50}
                width={75}
                timeout={5000}
                style={{ textAlign: 'center' }}
            />}

        {
            isEmptyData ? <Notification type={"info"} title={"Info"} message={"No records found"} /> : null
        }
    </>)
}

export default withStyles(styles)(ElderScrollsLegends);