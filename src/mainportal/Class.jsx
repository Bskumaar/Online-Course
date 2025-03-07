import React, { useState } from 'react';

import Class1 from './Class1'
import Class2 from './Class2'
import Class3 from './Class3'
import Class4 from './Class4'
import "../css/portal/Class.css";


function Class() {
  const [classPage, setClassPage] = useState("class1")

  const renderClass = () => {
    switch (classPage) {
      case "class1":
        return <Class1  />
      case "class2":
        return <Class2 />;
      case "class3":
        return <Class3  />;
        case "class4":
          return <Class4  />;
  default:
    return <Class1 />;
            
    }
  }
  return (
    <div> <div className='class mt-5 text-center pt-3'>
      <h1>Class Sessions </h1>
      <div className='classmain'>
        <div className='d-flex classno gap-1 '>
          <div onClick={() => setClassPage("class1")} className='bg-success'>01</div>
          <div onClick={() => setClassPage("class2")}  className='bg-success'>02</div>
          <div onClick={() => setClassPage("class3")}  className='bg-success'>03</div>
          <div onClick={() => setClassPage("class4")}  className='bg-warning'>04</div>
          <div >05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>
          <div>09</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div></div>
        <div className='d-flex classno gap-1 '>
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
          <div>32</div>
          <div>33</div>
          <div>34</div>
          <div>35</div>
          <div>36</div>
          <div>37</div>
          <div>38</div>
          <div>39</div>
          <div>40</div></div>
        <div className='d-flex classno gap-1'>
          <div>41</div>
          <div>42</div>
          <div>43</div>
          <div>44</div>
          <div>45</div>
          <div>46</div>
          <div>47</div>
          <div>48</div>
          <div>49</div>
          <div>50</div>
          <div>51</div>
          <div>52</div>
          <div>53</div>
          <div>54</div>
          <div>55</div>
          <div>56</div>
          <div>57</div>
          <div>58</div>
          <div>59</div>
          <div>60</div></div>
        <div className='d-flex classno gap-1'>
          <div>61</div>
          <div>62</div>
          <div>63</div>
          <div>64</div>
          <div>65</div>
          <div>66</div>
          <div>67</div>
          <div>68</div>
          <div>69</div>
          <div>70</div>
          <div>70</div>
          <div>72</div>
          <div>73</div>
          <div>74</div>
          <div>75</div>
          <div>76</div>
          <div>77</div>
          <div>78</div>
          <div>79</div>
          <div>80</div></div>

        <div className='d-flex classno gap-1 '>
          <div>81</div>
          <div>82</div>
          <div>83</div>
          <div>84</div>
          <div>85</div>
          <div>86</div>
          <div>87</div>
          <div>88</div>
          <div>89</div>
          <div>90</div></div>
      </div>
    </div>
    {/* <Class1/>  */}
    
{renderClass()}
    </div>
  )
}

export default Class
