Gamesfinder.
=======================================

React, Redux, Redux Thunk, Styled Components, Framer Motion.

Main goal -> get data from API, use different filter params, infinite scroll, animations.


* * *
### [Demo](https://cold-world.github.io/gamesfinder/)

![Alt Text](https://i.ibb.co/jWRxBDj/Screenshot-2023-03-28-212902.jpg)

* * *



### A piece of code

```
//fetch games for infinite scroll
export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (url, { rejectWithValue, dispatch }) => {
    const response = await axios.get(url);

    try {
      if (response.status !== 200) {
        throw new Error(
          'Something went wrong with server... Try again later please.'
        );
      } else {
        dispatch(getcurrentFetchUrl(url));
        return response.data.results;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

### Download & Installation

```shell 
git clone https://github.com/cold-world/gamesfinder.git
cd <project-dir>
npm install
npm run dev
```
