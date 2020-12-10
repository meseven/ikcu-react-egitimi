import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function About() {
	const query = useQuery();

	const lang = query.get("lang");
	console.log(lang);

	return <div>about page</div>;
}

export default About;
