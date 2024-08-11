import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IClient,
  IGame,
  IHeader,
  IImage,
  IMovies,
  IPricing,
  ISolution,
  IStack,
} from "./Article";

interface ApiState {
  isloading: boolean;
  headerData: IHeader | null;
  stackData: IStack | null;
  imageData: IImage | null;
  clientData: IClient | null;
  gameData: IGame | null;
  pricingData: IPricing | null;
  solutionData: ISolution | null;
  moviesData: IMovies | null;
  error: boolean;
}

export const fetchHeader = createAsyncThunk("fetchHeader", async () => {
  const headerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/Api/header.json"
  );
  return headerData.json();
});
export const fetchStack = createAsyncThunk("fetchStack", async () => {
  const stackData = await fetch(
    "https://nikhilsingh137.github.io/React_data/Api/Stack.json"
  );
  return stackData.json();
});

export const fetchImage = createAsyncThunk("fetchImage", async () => {
  const imageData = await fetch(
    "https://nikhilsingh137.github.io/React_data/Api/Image.json"
  );
  return imageData.json();
});
export const fetchClient = createAsyncThunk("fetchClient", async () => {
  const clientData = await fetch(
    "https://nikhilsingh137.github.io/React_data/Api/client.json"
  );
  return clientData.json();
});
export const fetchGame = createAsyncThunk("fetchGame", async () => {
  const gameData = await fetch(
    "https://nikhilsingh137.github.io/React_data/Api/games.json"
  );
  return gameData.json();
});
export const fetchPricing = createAsyncThunk("fetchPricing", async () => {
  const pricingData = await fetch(
    "https://nikhilsingh137.github.io/React_data/Api/pricing.json"
  );
  return pricingData.json();
});

export const fetchSolution = createAsyncThunk("fetchSolution", async () => {
  const solutionData = await fetch(
    "https://nikhilsingh137.github.io/React_data/Api/solution.json"
  );
  return solutionData.json();
});
export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async ({ query }: any) => {
    const moviesData = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=8e7fcd67`
    );
    return moviesData.json();
  }
);

export const initialState: ApiState = {
  isloading: false,
  headerData: null,
  stackData: null,
  imageData: null,
  gameData: null,
  clientData: null,
  pricingData: null,
  solutionData: null,
  moviesData: null,
  error: false,
};

export const counterSlice = createSlice({
  name: "Api",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHeader.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchHeader.fulfilled, (state, action) => {
      state.headerData = action.payload;
    });
    builder.addCase(fetchStack.fulfilled, (state, action) => {
      state.stackData = action.payload;
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.imageData = action.payload;
    });
    builder.addCase(fetchClient.fulfilled, (state, action) => {
      state.clientData = action.payload;
    });
    builder.addCase(fetchGame.fulfilled, (state, action) => {
      state.gameData = action.payload;
    });
    builder.addCase(fetchPricing.fulfilled, (state, action) => {
      state.pricingData = action.payload;
    });
    builder.addCase(fetchSolution.fulfilled, (state, action) => {
      state.solutionData = action.payload;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.moviesData = action.payload;
    });
    builder.addCase(fetchHeader.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default counterSlice.reducer;
