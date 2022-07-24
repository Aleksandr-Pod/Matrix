import { useSelector, useDispatch } from 'react-redux';
import { Tdata, Tsum, Tmeans } from './table/table.styled';
import { calcSums, calcMeans } from './table/operateMatryx';
import { changeData, setPercent } from './reducers/dataSlice';

export const App = () => {
  const dispatch = useDispatch();
  const { data, percent } = useSelector(store => store);
  const sumsColumn = calcSums(data);
  const meansLine = calcMeans(data);

  const showPercent = (idx) => {
    const totalSumm = sumsColumn.reduce((accum, next) => accum + next, 0);
    const calcPercent = ((sumsColumn[idx] / totalSumm) * 100).toFixed(1);
    dispatch(setPercent({ calcPercent, idx }));
  }

  return (
    <table>
      {/* header row */}
      <thead>
        <tr> 
          <Tsum>Summ</Tsum>
          {meansLine.map((el, idx) => (
            <Tmeans key={`m${idx}`}>{el}</Tmeans>
          ))}
        </tr>
      </thead>
      {/* main table */}
      <tbody>
        {data.map((line, idx1) => (
          <tr key={`s${idx1}`}>
            <Tsum
            onMouseEnter={() => showPercent(idx1)}
              onMouseLeave={() => dispatch(setPercent({ calcPercent: undefined, idx: idx1 }))}>
              {percent[idx1] === undefined ? sumsColumn[idx1] : `${percent[idx1]} %`}
            </Tsum>
            {line.map((el, idx2) => (
              <Tdata key={`s${idx1}-d${idx2}`} onClick={() => dispatch(changeData({x:idx1, y:idx2}))}>{el.value}</Tdata>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
